import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalLogin() {
  const navigate = useNavigate();

  // State for Login Form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  // State for Register Form
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regMessage, setRegMessage] = useState("");

  // Helper: Close a modal by its id using Bootstrap Modal API
  const closeModal = (modalId) => {
    const modalEl = document.getElementById(modalId);
    if (modalEl && window.bootstrap) {
      let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      if (!modalInstance) {
        modalInstance = new window.bootstrap.Modal(modalEl);
      }
      modalInstance.hide();
    }
  };

  // Handler for Login Form Submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginMessage("");
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      if (!response.ok) {
        setLoginMessage(data.message || "Login failed");
      } else {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("userName", data.name);
        setLoginMessage("Login successful!");
        closeModal("login");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }
    } catch (error) {
      setLoginMessage("An error occurred. Please try again.");
    }
  };

  // Handler for Register Form Submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegMessage("");
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: regFirstName,
          lastName: regLastName,
          email: regEmail,
          password: regPassword,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setRegMessage(data.message || "Registration failed");
      } else {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("userName", data.name);
        setRegMessage("Registration successful!");
        closeModal("register");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }
    } catch (error) {
      setRegMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Login Modal */}
      <div className="modal modalCentered fade form-sign-in modal-part-content" id="login">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Log in</div>
              <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
            </div>
            <div className="tf-login-form">
              <form onSubmit={handleLogin}>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    type="email"
                    placeholder=" "
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <label className="tf-field-label">Email *</label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    type="password"
                    placeholder=" "
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <label className="tf-field-label">Password *</label>
                </div>
                <div>
                  <a href="#forgotPassword" data-bs-toggle="modal" className="btn-link link">
                    Forgot your password?
                  </a>
                </div>
                <div className="bottom">
                  <button
                    type="submit"
                    className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                  >
                    <span>Log in</span>
                  </button>
                  <a href="#register" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                    New customer? Create your account
                    <i className="icon icon-arrow1-top-left"></i>
                  </a>
                </div>
                {loginMessage && <p>{loginMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <div className="modal modalCentered fade form-sign-in modal-part-content" id="forgotPassword">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Reset your password</div>
              <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
            </div>
            <div className="tf-login-form">
              <form>
                <p>
                  Sign up for early Sale access plus tailored new arrivals, trends, and promotions.
                  To opt out, click unsubscribe in our emails.
                </p>
                <div className="tf-field style-1">
                  <input className="tf-field-input tf-input" type="email" placeholder=" " required />
                  <label className="tf-field-label">Email *</label>
                </div>
                <div>
                  <a href="#login" data-bs-toggle="modal" className="btn-link link">Cancel</a>
                </div>
                <div className="bottom">
                  <button
                    type="submit"
                    className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                  >
                    <span>Reset password</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div className="modal modalCentered fade form-sign-in modal-part-content" id="register">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Register</div>
              <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
            </div>
            <div className="tf-login-form">
              <form onSubmit={handleRegister}>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    type="text"
                    placeholder=" "
                    required
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                  />
                  <label className="tf-field-label">First name</label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    type="text"
                    placeholder=" "
                    required
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                  />
                  <label className="tf-field-label">Last name</label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    type="email"
                    placeholder=" "
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                  <label className="tf-field-label">Email *</label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    type="password"
                    placeholder=" "
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                  />
                  <label className="tf-field-label">Password *</label>
                </div>
                <div className="bottom">
                  <button
                    type="submit"
                    className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                  >
                    <span>Register</span>
                  </button>
                  <a href="#login" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                    Already have an account? Log in here
                    <i className="icon icon-arrow1-top-left"></i>
                  </a>
                </div>
                {regMessage && <p>{regMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLogin;
