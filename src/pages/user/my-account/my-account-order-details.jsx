import React, { useState, useEffect } from "react";
import AccountSidebar from "./sidebar-account";
import MyAccountSidebar from "./my-account-sidebar";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function MyAccountOrderDetails() {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('id');
    
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                if (!orderId) {
                    setError('Order ID is missing');
                    setLoading(false);
                    return;
                }

                const token = localStorage.getItem('userToken');
                if (!token) {
                    setError('Please login to view order details');
                    setLoading(false);
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const { data } = await axios.get(
                    `http://localhost:5000/api/orders/${orderId}`,
                    config
                );

                setOrder(data);
                setLoading(false);
            } catch (error) {
                setError(
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
                );
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {/* <!-- page-title --> */}
            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">Order Details</div>
                </div>
            </div>
            {/* <!-- /page-title --> */}
            
            {/* <!-- page-cart --> */}
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <MyAccountSidebar/>
                        <div className="col-lg-9">
                            {loading ? (
                                <div className="text-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : error ? (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            ) : order ? (
                                <div className="wd-form-order">
                                    <div className="order-head">
                                        <figure className="img-product">
                                            {order.orderItems && order.orderItems.length > 0 && order.orderItems[0].images && (
                                                <img src={order.orderItems[0].images[0]} alt="product" />
                                            )}
                                        </figure>
                                        <div className="content">
                                            <div className="badge">{order.status}</div>
                                            <h6 className="mt-8 fw-5">Order #{order.orderNumber}</h6>
                                        </div>
                                    </div>
                                    <div className="tf-grid-layout md-col-2 gap-15">
                                        <div className="item">
                                            <div className="text-2 text_black-2">Items</div>
                                            <div className="text-2 mt_4 fw-6">{order.orderItems.length} {order.orderItems.length === 1 ? 'item' : 'items'}</div>
                                        </div>
                                        <div className="item">
                                            <div className="text-2 text_black-2">Payment Method</div>
                                            <div className="text-2 mt_4 fw-6">{order.paymentMethod}</div>
                                        </div>
                                        <div className="item">
                                            <div className="text-2 text_black-2">Order Date</div>
                                            <div className="text-2 mt_4 fw-6">{formatDate(order.createdAt)}</div>
                                        </div>
                                        <div className="item">
                                            <div className="text-2 text_black-2">Shipping Address</div>
                                            <div className="text-2 mt_4 fw-6">
                                                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.country}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-tabs style-has-border widget-order-tab">
                                        <ul className="widget-menu-tab">
                                            <li className={`item-title ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
                                                <span className="inner">Order History</span>
                                            </li>
                                            <li className={`item-title ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                                                <span className="inner">Item Details</span>
                                            </li>
                                            <li className={`item-title ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                                                <span className="inner">Shipping</span>
                                            </li>
                                            <li className={`item-title ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                                                <span className="inner">Receiver</span>
                                            </li>
                                        </ul>
                                        <div className="widget-content-tab">
                                            <div className={`widget-content-inner ${activeTab === 0 ? 'active' : ''}`}>
                                                <div className="widget-timeline">
                                                    <ul className="timeline">
                                                        {/* Order placed */}
                                                        <li>
                                                            <div className="timeline-badge success"></div>
                                                            <div className="timeline-box">
                                                                <a className="timeline-panel" href="javascript:void(0);">
                                                                    <div className="text-2 fw-6">Order Placed</div>
                                                                    <span>{formatDate(order.createdAt)}</span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        
                                                        {/* Payment status */}
                                                        <li>
                                                            <div className={`timeline-badge ${order.isPaid ? 'success' : ''}`}></div>
                                                            <div className="timeline-box">
                                                                <a className="timeline-panel" href="javascript:void(0);">
                                                                    <div className="text-2 fw-6">{order.isPaid ? 'Payment Completed' : 'Payment Pending'}</div>
                                                                    <span>{order.isPaid ? formatDate(order.paidAt) : 'Awaiting payment'}</span>
                                                                </a>
                                                                {order.isPaid && order.paymentResult && (
                                                                    <>
                                                                        <p><strong>Payment ID: </strong>{order.paymentResult.id || 'N/A'}</p>
                                                                        {order.paymentResult.cardType && (
                                                                            <p><strong>Payment Method: </strong>{order.paymentResult.cardType} (**** {order.paymentResult.cardLastFour || '****'})</p>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </div>
                                                        </li>
                                                        
                                                        {/* Processing */}
                                                        <li>
                                                            <div className={`timeline-badge ${order.isPaid && order.status === 'Processing' ? 'success' : ''}`}></div>
                                                            <div className="timeline-box">
                                                                <a className="timeline-panel" href="javascript:void(0);">
                                                                    <div className="text-2 fw-6">Processing Order</div>
                                                                    <span>{order.isPaid && order.status === 'Processing' ? 'In progress' : 'Pending'}</span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        
                                                        {/* Shipping */}
                                                        <li>
                                                            <div className={`timeline-badge ${order.status === 'Shipped' ? 'success' : ''}`}></div>
                                                            <div className="timeline-box">
                                                                <a className="timeline-panel" href="javascript:void(0);">
                                                                    <div className="text-2 fw-6">Product Shipped</div>
                                                                    <span>{order.status === 'Shipped' ? 'Your order is on the way' : 'Pending'}</span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        
                                                        {/* Delivery */}
                                                        <li>
                                                            <div className={`timeline-badge ${order.isDelivered ? 'success' : ''}`}></div>
                                                            <div className="timeline-box">
                                                                <a className="timeline-panel" href="javascript:void(0);">
                                                                    <div className="text-2 fw-6">Delivered</div>
                                                                    <span>{order.isDelivered ? formatDate(order.deliveredAt) : 'Pending'}</span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={`widget-content-inner ${activeTab === 1 ? 'active' : ''}`}>
                                                {order.orderItems.map((item, index) => (
                                                    <div key={index} className="order-head mb-3">
                                                        <figure className="img-product">
                                                            {item.images && item.images.length > 0 && (
                                                                <img src={item.images[0]} alt={item.name} />
                                                            )}
                                                        </figure>
                                                        <div className="content">
                                                            <div className="text-2 fw-6">{item.name}</div>
                                                            <div className="mt_4"><span className="fw-6">Price :</span> ${item.price.toFixed(2)}</div>
                                                            <div className="mt_4"><span className="fw-6">Quantity :</span> {item.quantity}</div>
                                                            {item.size && <div className="mt_4"><span className="fw-6">Size :</span> {item.size}</div>}
                                                            {item.color && <div className="mt_4"><span className="fw-6">Color :</span> {item.color}</div>}
                                                        </div>
                                                    </div>
                                                ))}
                                                <ul>
                                                    <li className="d-flex justify-content-between text-2">
                                                        <span>Subtotal</span>
                                                        <span className="fw-6">${order.subtotal.toFixed(2)}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between text-2 mt_4">
                                                        <span>Shipping</span>
                                                        <span className="fw-6">${order.shippingPrice.toFixed(2)}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between text-2 mt_4">
                                                        <span>Tax</span>
                                                        <span className="fw-6">${order.taxPrice.toFixed(2)}</span>
                                                    </li>
                                                    {order.giftWrap && (
                                                        <li className="d-flex justify-content-between text-2 mt_4">
                                                            <span>Gift Wrap</span>
                                                            <span className="fw-6">${order.giftWrapPrice.toFixed(2)}</span>
                                                        </li>
                                                    )}
                                                    <li className="d-flex justify-content-between text-2 mt_4 pb_8 line">
                                                    </li>
                                                    <li className="d-flex justify-content-between text-2 mt_8">
                                                        <span>Order Total</span>
                                                        <span className="fw-6">${order.totalPrice.toFixed(2)}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={`widget-content-inner ${activeTab === 2 ? 'active' : ''}`}>
                                                <h6 className="fw-6 mb-3">Shipping Information</h6>
                                                <p>
                                                    Your order will be shipped to the address below. Please make sure the delivery
                                                    address is correct and someone is available to receive the package.
                                                </p>
                                                <div className="mt-4">
                                                    <p><strong>Shipping Method:</strong> Standard Shipping</p>
                                                    {order.isDelivered ? (
                                                        <p><strong>Delivery Status:</strong> <span className="text-success">Delivered on {formatDate(order.deliveredAt)}</span></p>
                                                    ) : (
                                                        <p><strong>Delivery Status:</strong> {order.status}</p>
                                                    )}
                                                    {order.status === 'Shipped' && (
                                                        <p><strong>Estimated Delivery:</strong> {formatDate(new Date(Date.now() + 3*24*60*60*1000))}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`widget-content-inner ${activeTab === 3 ? 'active' : ''}`}>
                                                <p className="text-2 text_success">Thank you! Your order has been received</p>
                                                <ul className="mt_20">
                                                    <li>Order Number: <span className="fw-7">#{order.orderNumber}</span></li>
                                                    <li>Date: <span className="fw-7">{formatDate(order.createdAt)}</span></li>
                                                    <li>Total: <span className="fw-7">${order.totalPrice.toFixed(2)}</span></li>
                                                    <li>Payment Method: <span className="fw-7">{order.paymentMethod}</span></li>
                                                    <li>Name: <span className="fw-7">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</span></li>
                                                    <li>Email: <span className="fw-7">{order.shippingAddress.email}</span></li>
                                                    <li>Phone: <span className="fw-7">{order.shippingAddress.phone}</span></li>
                                                    <li>Address: <span className="fw-7">{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.country}</span></li>
                                                    {order.shippingAddress.notes && (
                                                        <li>Notes: <span className="fw-7">{order.shippingAddress.notes}</span></li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <p>Order not found</p>
                                    <Link to="/myaccountorders" className="tf-btn btn-fill animate-hover-btn rounded-0 mt-4">
                                        <span>Back to Orders</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- page-cart --> */}

            <div className="btn-sidebar-account">
                <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount" aria-controls="offcanvas">
                    <i className="icon icon-sidebar-2"></i>
                </button>
            </div>
            <AccountSidebar/>
        </>
    );
}

export default MyAccountOrderDetails;