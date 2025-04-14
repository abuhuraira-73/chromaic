import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MyAccountSidebar() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        
        // Dispatch a custom event to notify other components about logout
        const logoutEvent = new Event('user-logout');
        window.dispatchEvent(logoutEvent);
        
        navigate("/");
        setTimeout(() => {
            const modalEl = document.getElementById("login");
            if (modalEl && window.bootstrap) {
                let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
                if (!modalInstance) {
                    modalInstance = new window.bootstrap.Modal(modalEl);
                }
                modalInstance.show();
            }
        }, 300);
    };
    
    return (
            <div className="col-lg-3">
              <div className="wrap-sidebar-account">
                <ul className="my-account-nav">
                  <li>
                    <Link to="/myaccount" className="my-account-nav-item">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/myaccountorders" className="my-account-nav-item">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/myaccountaddress" className="my-account-nav-item">
                      Address
                    </Link>
                  </li>
                  <li>
                    <Link to="/myaccounteditdetails" className="my-account-nav-item">
                      Account Details
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleLogout} className="my-account-nav-item" style={{ cursor: 'pointer' }}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    );
}

export default MyAccountSidebar;