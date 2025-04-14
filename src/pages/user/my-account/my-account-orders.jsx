import React, { useState, useEffect } from "react";
import AccountSidebar from "./sidebar-account";
import MyAccountSidebar from "./my-account-sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

function MyAccountOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('userToken');
                if (!token) {
                    setError('Please login to view your orders');
                    setLoading(false);
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const { data } = await axios.get(
                    'http://localhost:5000/api/orders/myorders',
                    config
                );

                setOrders(data);
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

        fetchOrders();
    }, []);

    // Format date function
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
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
                    <div className="heading text-center">My Orders</div>
                </div>
            </div>
            {/* <!-- /page-title --> */}
            
            {/* <!-- page-cart --> */}
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <MyAccountSidebar/>
                        <div className="col-lg-9">
                            <div className="my-account-content account-order">
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
                                ) : orders.length === 0 ? (
                                    <div className="text-center">
                                        <p>You haven't placed any orders yet.</p>
                                        <Link to="/shop" className="tf-btn btn-fill animate-hover-btn rounded-0 mt-4">
                                            <span>Start Shopping</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="wrap-account-order">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="fw-6">Order</th>
                                                    <th className="fw-6">Date</th>
                                                    <th className="fw-6">Status</th>
                                                    <th className="fw-6">Total</th>
                                                    <th className="fw-6">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order._id} className="tf-order-item">
                                                        <td>
                                                            #{order.orderNumber}
                                                        </td>
                                                        <td>
                                                            {formatDate(order.createdAt)}
                                                        </td>
                                                        <td>
                                                            {order.status}
                                                        </td>
                                                        <td>
                                                            ${order.totalPrice.toFixed(2)} for {order.orderItems.length} {order.orderItems.length === 1 ? 'item' : 'items'}
                                                        </td>
                                                        <td>
                                                            <Link 
                                                                to={`/myaccountorderdetails?id=${order._id}`} 
                                                                className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
                                                            >
                                                                <span>View</span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
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

export default MyAccountOrders;