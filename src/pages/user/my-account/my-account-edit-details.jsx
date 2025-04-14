import React, { useState } from "react";
import AccountSidebar from "./sidebar-account";
import MyAccountSidebar from "./my-account-sidebar";
import axios from "axios";

function MyAccountEditDetails() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [messageType, setMessageType] = useState(""); // success or error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        
        // Validation
        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password do not match");
            setMessageType("error");
            return;
        }

        if (newPassword.length < 6) {
            setMessage("Password must be at least 6 characters");
            setMessageType("error");
            return;
        }

        try {
            setLoading(true);
            const token = localStorage.getItem('userToken');
            
            if (!token) {
                setMessage("You must be logged in to change your password");
                setMessageType("error");
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await axios.put(
                'http://localhost:5000/api/users/password',
                { currentPassword, newPassword },
                config
            );

            setMessage("Password updated successfully!");
            setMessageType("success");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            setMessage(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : "An error occurred. Please try again."
            );
            setMessageType("error");
        } finally {
            setLoading(false);
        }
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
                    <div className="heading text-center">Account Details</div>
                </div>
            </div>
            {/* <!-- /page-title --> */}
            
            {/* <!-- page-cart --> */}
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <MyAccountSidebar/>
                        <div className="col-lg-9">
                            <div className="my-account-content account-edit">
                                <div className="">
                                    <form className="" id="form-password-change" onSubmit={handleSubmit}>
                                        <h6 className="mb_20">Password Change</h6>
                                        
                                        {message && (
                                            <div className={`alert ${messageType === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                                                {message}
                                            </div>
                                        )}
                                        
                                        <div className="tf-field style-1 mb_30">
                                            <input 
                                                className="tf-field-input tf-input" 
                                                placeholder=" " 
                                                type="password" 
                                                id="currentPassword" 
                                                name="currentPassword"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                required
                                            />
                                            <label className="tf-field-label fw-4 text_black-2" htmlFor="currentPassword">Current password</label>
                                        </div>
                                        <div className="tf-field style-1 mb_30">
                                            <input 
                                                className="tf-field-input tf-input" 
                                                placeholder=" " 
                                                type="password" 
                                                id="newPassword" 
                                                name="newPassword"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                            />
                                            <label className="tf-field-label fw-4 text_black-2" htmlFor="newPassword">New password</label>
                                        </div>
                                        <div className="tf-field style-1 mb_30">
                                            <input 
                                                className="tf-field-input tf-input" 
                                                placeholder=" " 
                                                type="password" 
                                                id="confirmPassword" 
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                            <label className="tf-field-label fw-4 text_black-2" htmlFor="confirmPassword">Confirm password</label>
                                        </div>
                                        <div className="mb_20">
                                            <button 
                                                type="submit" 
                                                className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                                                disabled={loading}
                                            >
                                                {loading ? "Updating..." : "Save Changes"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- page-cart --> */}

            <div className="btn-sidebar-account">
                <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount" aria-controls="offcanvas"><i className="icon icon-sidebar-2"></i></button>
            </div>
            <AccountSidebar/>
        </>
    )
}
export default MyAccountEditDetails;