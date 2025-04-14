import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import paymentService from "../../services/paymentService";

function PaymentConfirmation() {
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Get order ID from URL params
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get("orderId");
    
    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                
                if (!orderId) {
                    throw new Error("Missing order ID");
                }
                
                console.log("Fetching order details for orderId:", orderId);
                
                // Fetch order details directly
                const orderData = await paymentService.getOrderDetails(orderId);
                console.log("Order data received:", orderData);
                
                if (!orderData) {
                    throw new Error("Order details not found");
                }
                
                setOrderDetails(orderData);
            } catch (err) {
                console.error("Error fetching order details:", err);
                setError(err.response?.data?.message || err.message || "Failed to load order details");
            } finally {
                setLoading(false);
            }
        };
        
        fetchOrderDetails();
    }, [orderId]);
    
    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    
    // Simplified rendering without complex styling
    return (
        <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Payment Confirmation</h1>
            
            {loading ? (
                <div style={{ textAlign: "center" }}>
                    <p>Loading payment details...</p>
                </div>
            ) : error ? (
                <div style={{ textAlign: "center" }}>
                    <p style={{ color: "red" }}>Error: {error}</p>
                    <div style={{ margin: "20px 0", display: "flex", justifyContent: "center", gap: "20px" }}>
                        <Link to="/cart" style={{ 
                            padding: "10px 20px", 
                            background: "#000", 
                            color: "#fff", 
                            textDecoration: "none",
                            borderRadius: "4px"
                        }}>
                            Return to cart
                        </Link>
                        <Link to="/shop" style={{ 
                            padding: "10px 20px", 
                            border: "1px solid #000", 
                            color: "#000", 
                            textDecoration: "none",
                            borderRadius: "4px"
                        }}>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            ) : orderDetails ? (
                <div style={{ border: "1px solid #eee", padding: "20px", borderRadius: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Date:</div>
                        <div>{formatDate(orderDetails.createdAt || new Date())}</div>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Order Number:</div>
                        <div>{orderDetails.orderNumber || orderId}</div>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Payment method:</div>
                        <div>{orderDetails.paymentMethod === 'creditCard' ? 
                             (orderDetails.paymentResult?.cardType || 'Credit Card') : 
                             orderDetails.paymentMethod}</div>
                    </div>
                    
                    {orderDetails.paymentResult?.cardLastFour && (
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                            <div>Card number:</div>
                            <div>**** **** **** {orderDetails.paymentResult.cardLastFour}</div>
                        </div>
                    )}
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Name:</div>
                        <div>{orderDetails.shippingAddress.firstName} {orderDetails.shippingAddress.lastName}</div>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Email:</div>
                        <div>{orderDetails.shippingAddress.email}</div>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Phone:</div>
                        <div>{orderDetails.shippingAddress.phone}</div>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div>Shipping address:</div>
                        <div>{`${orderDetails.shippingAddress.address}, ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}</div>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontWeight: "bold" }}>
                        <div>Total:</div>
                        <div>${orderDetails.totalPrice.toFixed(2)} USD</div>
                    </div>
                    
                    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                        <Link to="/shop" style={{ 
                            flex: 1, 
                            padding: "10px", 
                            background: "#000", 
                            color: "#fff", 
                            textDecoration: "none",
                            textAlign: "center",
                            borderRadius: "4px"
                        }}>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <p>No order details found</p>
                    <Link to="/shop" style={{ 
                        display: "inline-block",
                        margin: "20px 0",
                        padding: "10px 20px", 
                        background: "#000", 
                        color: "#fff", 
                        textDecoration: "none",
                        borderRadius: "4px"
                    }}>
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PaymentConfirmation;