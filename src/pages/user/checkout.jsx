import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import cartService from "../../services/cartService";
import paymentService from "../../services/paymentService";

function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [subtotal, setSubtotal] = useState(0);
    const [processingOrder, setProcessingOrder] = useState(false);
    const [isGiftWrapSelected, setIsGiftWrapSelected] = useState(false);
    const giftWrapPrice = 5.00;
    const shippingPrice = 10.00; // Fixed shipping price
    const [discountCode, setDiscountCode] = useState('');
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        email: '',
        notes: ''
    });
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        cardExpiry: '',
        cvv: '',
        cardName: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const navigate = useNavigate();

    // Fetch cart items
    useEffect(() => {
        const fetchCart = async () => {
            try {
                setLoading(true);
                const data = await cartService.getCart();
                setCartItems(data);
                calculateSubtotal(data, isGiftWrapSelected);
            } catch (err) {
                console.error("Error fetching cart items:", err);
                setError(err.response?.data?.message || "Failed to load cart. Please try logging in again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCart();

        // Set up event listener for cart updates
        const handleStorageChange = () => {
            if (localStorage.getItem('cartUpdated') === 'true') {
                localStorage.removeItem('cartUpdated');
                fetchCart();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        // Check directly in this component
        if (localStorage.getItem('cartUpdated') === 'true') {
            localStorage.removeItem('cartUpdated');
            fetchCart();
        }

        // Clean up event listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [isGiftWrapSelected]);

    // Calculate subtotal
    const calculateSubtotal = (items, giftWrapSelected) => {
        const itemsTotal = items.reduce((sum, item) => {
            const price = item.salePrice || item.price;
            return sum + (price * item.quantity);
        }, 0);
        
        // Add gift wrap fee if selected
        const total = giftWrapSelected ? itemsTotal + giftWrapPrice : itemsTotal;
        setSubtotal(total);
        return {itemsTotal, total};
    };

    // Handle gift wrap selection
    const handleGiftWrapChange = (e) => {
        const isChecked = e.target.checked;
        setIsGiftWrapSelected(isChecked);
        calculateSubtotal(cartItems, isChecked);
    };

    // Handle input changes for billing details
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setBillingDetails({
            ...billingDetails,
            [id]: value
        });
    };

    // Handle input changes for payment details
    const handlePaymentInputChange = (e) => {
        const { id, value } = e.target;
        setPaymentDetails({
            ...paymentDetails,
            [id]: value
        });
    };

    // Handle payment method selection
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    // Handle discount code
    const handleDiscountCode = (e) => {
        setDiscountCode(e.target.value);
    };

    // Apply discount code
    const applyDiscount = (e) => {
        e.preventDefault();
        // This would typically make an API call to validate and apply the discount
        alert(`Discount code ${discountCode} applied!`);
    };

    // Calculate total price with taxes and shipping
    const calculateTotalPrice = () => {
        const taxRate = 0.08; // 8% tax rate
        const taxAmount = subtotal * taxRate;
        const totalWithTax = subtotal + taxAmount + shippingPrice;
        return {
            subtotal,
            taxAmount,
            shippingPrice,
            totalWithTax
        };
    };

    // Validate form
    const validateForm = () => {
        // Basic validation for billing details
        if (!billingDetails.firstName || !billingDetails.lastName || !billingDetails.country || 
            !billingDetails.city || !billingDetails.address || !billingDetails.phone || !billingDetails.email) {
            return { valid: false, message: "Please fill in all required billing fields" };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(billingDetails.email)) {
            return { valid: false, message: "Please enter a valid email address" };
        }

        // Validate phone number (basic)
        if (billingDetails.phone.length < 10) {
            return { valid: false, message: "Please enter a valid phone number" };
        }

        // If credit card is selected as payment method
        if (paymentMethod === 'creditCard') {
            // Basic validation for credit card details
            if (!paymentDetails.cardNumber || !paymentDetails.cardExpiry || !paymentDetails.cvv || !paymentDetails.cardName) {
                return { valid: false, message: "Please fill in all payment details" };
            }

            // Validate card number (basic check)
            if (paymentDetails.cardNumber.replace(/\s/g, '').length < 13) {
                return { valid: false, message: "Please enter a valid card number" };
            }

            // Validate CVV
            if (paymentDetails.cvv.length < 3) {
                return { valid: false, message: "Please enter a valid CVV" };
            }
        }

        return { valid: true };
    };

    // Handle place order
    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        
        // Validate form
        const validation = validateForm();
        if (!validation.valid) {
            alert(validation.message);
            return;
        }

        // Check if cart is empty
        if (cartItems.length === 0) {
            alert("Your cart is empty");
            return;
        }

        try {
            setProcessingOrder(true);
            
            // Calculate prices
            const { taxAmount, totalWithTax } = calculateTotalPrice();
            
            // Create order
            const orderData = {
                orderItems: cartItems,
                shippingAddress: {
                    firstName: billingDetails.firstName,
                    lastName: billingDetails.lastName,
                    address: billingDetails.address,
                    city: billingDetails.city,
                    country: billingDetails.country,
                    phone: billingDetails.phone,
                    email: billingDetails.email,
                    notes: billingDetails.notes
                },
                paymentMethod,
                subtotal: subtotal,
                taxPrice: taxAmount,
                shippingPrice: shippingPrice,
                giftWrap: isGiftWrapSelected,
                giftWrapPrice: isGiftWrapSelected ? giftWrapPrice : 0,
                totalPrice: totalWithTax
            };

            // Create the order first
            const order = await paymentService.createOrder(orderData);
            console.log("Order created:", order);
            
            // Process payment if credit card is selected
            if (paymentMethod === 'creditCard') {
                try {
                    // Process payment
                    const paymentResult = await paymentService.processPayment(order._id, {
                        cardNumber: paymentDetails.cardNumber.replace(/\s/g, ''),
                        cardExpiry: paymentDetails.cardExpiry,
                        cvv: paymentDetails.cvv,
                        cardName: paymentDetails.cardName
                    });
                    
                    console.log("Payment result:", paymentResult);
                    
                    // If payment is successful, redirect to confirmation page
                    if (paymentResult.success) {
                        // Redirect to payment confirmation page with order ID
                        window.location.href = `/payment-confirmation?orderId=${order._id}`;
                    } else {
                        // Handle unsuccessful payment
                        window.location.href = `/payment-fail?error=${encodeURIComponent(paymentResult.message || "Payment failed")}`;
                    }
                } catch (error) {
                    console.error("Payment processing error:", error);
                    // Redirect to payment failure page with error message
                    const errorMessage = error.response?.data?.message || error.message || "Payment processing failed";
                    window.location.href = `/payment-fail?error=${encodeURIComponent(errorMessage)}`;
                }
            } else {
                // For other payment methods (e.g., PayPal), redirect to a different flow
                // For simplicity in this demo, we'll redirect to confirmation
                window.location.href = `/payment-confirmation?orderId=${order._id}`;
            }
        } catch (error) {
            console.error("Order creation error:", error);
            setError("Failed to create order. Please try again.");
            setProcessingOrder(false);
        }
    };

    // Calculate prices for display
    const { taxAmount, totalWithTax } = calculateTotalPrice();

    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <!-- page-title --> */}
        <div className="tf-page-title">
            <div className="container-full">
                <div className="heading text-center">Check Out</div>
            </div>
        </div>
        {/* <!-- /page-title --> */}
        
        {/* <!-- page-cart --> */}
        <section className="flat-spacing-11">
            <div className="container">
                {loading ? (
                    <div className="text-center py-5">
                        <p>Loading checkout information...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-5">
                        <p>Error: {error}</p>
                        <Link to="/cart" className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">Return to cart<i className="icon icon-arrow1-top-left"></i></Link>
                    </div>
                ) : cartItems.length === 0 ? (
                    <div className="tf-page-cart text-center mt_140 mb_200">
                        <h5 className="mb_24">Your cart is empty</h5>
                        <p className="mb_24">You may check out all the available products and buy some in the shop</p>
                        <Link to="/shop" className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">Return to shop<i className="icon icon-arrow1-top-left"></i></Link>
                    </div>
                ) : (
                <div className="tf-page-cart-wrap layout-2">
                    <div className="tf-page-cart-item">
                        <h5 className="fw-5 mb_20">Billing details</h5>
                        <form className="form-checkout">
                            <div className="box grid-2">
                                <fieldset className="fieldset">
                                    <label htmlFor="firstName">First Name <span className="required">*</span></label>
                                    <input type="text" id="firstName" value={billingDetails.firstName} onChange={handleInputChange} placeholder="First Name" required/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                                    <input type="text" id="lastName" value={billingDetails.lastName} onChange={handleInputChange} placeholder="Last Name" required/>
                                </fieldset>
                            </div>
                            <fieldset className="box fieldset">
                                <label htmlFor="country">Country/Region <span className="required">*</span></label>
                                <div className="select-custom">
                                    <select className="tf-select w-100" id="country" name="country" value={billingDetails.country} onChange={handleInputChange} required>
                                        <option value="">Select Country</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Czech Republic">Czechia</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Vietnam">Vietnam</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset className="box fieldset">
                                <label htmlFor="city">Town/City <span className="required">*</span></label>
                                <input type="text" id="city" value={billingDetails.city} onChange={handleInputChange} required/>
                            </fieldset>
                            <fieldset className="box fieldset">
                                <label htmlFor="address">Address <span className="required">*</span></label>
                                <input type="text" id="address" value={billingDetails.address} onChange={handleInputChange} required/>
                            </fieldset>
                            <fieldset className="box fieldset">
                                <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                <input type="tel" id="phone" value={billingDetails.phone} onChange={handleInputChange} required/>
                            </fieldset>
                            <fieldset className="box fieldset">
                                <label htmlFor="email">Email <span className="required">*</span></label>
                                <input type="email" id="email" value={billingDetails.email} onChange={handleInputChange} required/>
                            </fieldset>
                            <fieldset className="box fieldset">
                                <label htmlFor="notes">Order notes (optional)</label>
                                <textarea name="notes" id="notes" value={billingDetails.notes} onChange={handleInputChange}></textarea>
                            </fieldset>
                        </form>

                        <h5 className="fw-5 mt-4 mb_20">Payment Method</h5>
                        <div className="payment-methods mb-3">
                            <div className="payment-method">
                                <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" 
                                       checked={paymentMethod === 'creditCard'} onChange={handlePaymentMethodChange} />
                                <label htmlFor="creditCard">Credit Card</label>
                            </div>
                            
                            {paymentMethod === 'creditCard' && (
                                <div className="payment-details mt-3">
                                    <fieldset className="box fieldset">
                                        <label htmlFor="cardNumber">Card Number <span className="required">*</span></label>
                                        <input type="text" id="cardNumber" value={paymentDetails.cardNumber} 
                                               onChange={handlePaymentInputChange} placeholder="1234 5678 9012 3456" required
                                               maxLength={19} />
                                    </fieldset>
                                    
                                    <div className="box grid-2">
                                        <fieldset className="fieldset">
                                            <label htmlFor="cardExpiry">Expiry Date <span className="required">*</span></label>
                                            <input type="text" id="cardExpiry" value={paymentDetails.cardExpiry} 
                                                   onChange={handlePaymentInputChange} placeholder="MM/YY" required
                                                   maxLength={5} />
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <label htmlFor="cvv">CVV <span className="required">*</span></label>
                                            <input type="text" id="cvv" value={paymentDetails.cvv} 
                                                   onChange={handlePaymentInputChange} placeholder="123" required
                                                   maxLength={4} />
                                        </fieldset>
                                    </div>
                                    
                                    <fieldset className="box fieldset">
                                        <label htmlFor="cardName">Cardholder Name <span className="required">*</span></label>
                                        <input type="text" id="cardName" value={paymentDetails.cardName} 
                                               onChange={handlePaymentInputChange} placeholder="Name on card" required />
                                    </fieldset>
                                    
                                    <div className="mt-3 mb-3">
                                        <p className="small text-muted">
                                            <strong>Test Card:</strong> Use 4111 1111 1111 1111 for successful payment<br/>
                                            <strong>Test Failure:</strong> Use 4000 0000 0000 0002 to simulate a failed payment
                                        </p>
                                    </div>
                                </div>
                            )}
                            
                            <div className="payment-method">
                                <input type="radio" id="paypal" name="paymentMethod" value="paypal" 
                                       checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
                                <label htmlFor="paypal">PayPal</label>
                            </div>
                        </div>
                    </div>
                    <div className="tf-page-cart-footer">
                        <div className="tf-cart-footer-inner">
                            <h5 className="fw-5 mb_20">Your order</h5>
                            <form className="tf-page-cart-checkout widget-wrap-checkout" onSubmit={handlePlaceOrder}>
                                <ul className="wrap-checkout-product">
                                    {cartItems.map((item) => (
                                        <li className="checkout-product-item" key={item.id}>
                                            <figure className="img-product">
                                                <img src={item.images && item.images.length > 0 ? item.images[0] : "/assets/images/products/default.jpg"} alt={item.name} />
                                                <span className="quantity">{item.quantity}</span>
                                        </figure>
                                            <div className="content">
                                                <div className="info">
                                                    <p className="name">{item.name}</p>
                                                    {(item.color || item.size) && (
                                                        <span className="variant">
                                                            {item.color && `${item.color}`}{item.color && item.size && " / "}{item.size && `${item.size}`}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="price">${((item.salePrice || item.price) * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                                <div className="coupon-box">
                                    <input type="text" placeholder="Discount code" value={discountCode} onChange={handleDiscountCode} />
                                    <a href="#" className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn" onClick={applyDiscount}>Apply</a>
                                            </div>
                                <div className="cart-checkbox mb-3">
                                    <input type="checkbox" className="tf-check" id="cart-gift-checkbox" checked={isGiftWrapSelected} onChange={handleGiftWrapChange}/>
                                    <label htmlFor="cart-gift-checkbox" className="fw-4">
                                        <span>Do you want a gift wrap?</span> Only <span className="fw-5">$5.00</span>
                                    </label>
                                        </div>
                                {isGiftWrapSelected ? (
                                    <>
                                        <div className="d-flex justify-content-between line">
                                            <h6 className="fw-5">Subtotal</h6>
                                            <h6 className="total fw-5">${(subtotal - giftWrapPrice).toFixed(2)}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between line">
                                            <h6 className="fw-5">Gift Wrap</h6>
                                            <h6 className="total fw-5">${giftWrapPrice.toFixed(2)}</h6>
                                        </div>
                                    </>
                                ) : null}
                                        
                                <div className="d-flex justify-content-between line">
                                    <h6 className="fw-5">Subtotal</h6>
                                    <h6 className="total fw-5">${subtotal.toFixed(2)}</h6>
                                </div>
                                
                                <div className="d-flex justify-content-between line">
                                    <h6 className="fw-5">Tax</h6>
                                    <h6 className="total fw-5">${taxAmount.toFixed(2)}</h6>
                                </div>
                                
                                <div className="d-flex justify-content-between line">
                                    <h6 className="fw-5">Shipping</h6>
                                    <h6 className="total fw-5">${shippingPrice.toFixed(2)}</h6>
                                </div>
                                
                                <div className="d-flex justify-content-between line">
                                    <h6 className="fw-5">Total</h6>
                                    <h6 className="total fw-5">${totalWithTax.toFixed(2)}</h6>
                                </div>
                                
                                <button type="submit" className="tf-btn w-100 btn-fill animate-hover-btn radius-3" disabled={processingOrder}>
                                    {processingOrder ? 'Processing...' : 'Place Order'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </section>
        {/* <!-- page-cart --> */}
        </>
    )
}
export default Checkout;