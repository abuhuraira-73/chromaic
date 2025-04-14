import React, { useEffect, useState } from "react";
import AccountSidebar from "./sidebar-account";
import { Link } from "react-router-dom";
import MyAccountSidebar from "./my-account-sidebar";

function MyAccount() {
  const [userName, setUserName] = useState("Themesflat");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      {/* <!-- page-title --> */}
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">My Account</div>
        </div>
      </div>
      {/* <!-- /page-title --> */}

      {/* <!-- page-cart --> */}
      <section className="flat-spacing-11">
        <div className="container">
          <div className="row">
<MyAccountSidebar/>
            <div className="col-lg-9">
              <div className="my-account-content account-dashboard">
                <div className="mb_60">
                  <h5 className="fw-5 mb_20">Hello {userName}</h5>
                  <p>
                    From your account dashboard you can view your{" "}
                    <Link className="text_primary" to="/myaccountorders">
                      recent orders
                    </Link>
                    , manage your{" "}
                    <Link className="text_primary" to="/myaccountaddress">
                      shipping and billing address
                    </Link>
                    , and{" "}
                    <Link className="text_primary" to="/myaccounteditdetails">
                      edit your password and account details
                    </Link>
                    .
                  </p>
                </div>
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
      <AccountSidebar />
    </>
  );
}

export default MyAccount;
