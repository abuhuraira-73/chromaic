import React from "react";
import { Link, useLocation } from "react-router-dom";

function PaymentFail() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get("error") || "Payment processing failed. Please try again.";
    
    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

            <h1>Payment Failed</h1>
            <p style={{ color: "red", margin: "20px 0" }}>{errorMessage}</p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "30px 0" }}>
                <Link to="/checkout" style={{ 
                    padding: "10px 20px", 
                    background: "#000", 
                    color: "#fff", 
                    textDecoration: "none",
                    borderRadius: "4px"
                }}>
                    Try Again
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
    );
}

export default PaymentFail;