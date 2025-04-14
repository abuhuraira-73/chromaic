import React from "react";
function Invoice() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
    <div className="wrapper-invoice">
      <section className="invoice-section">
        <div className="cus-container2">
          <div className="top">
            <button className="tf-btn btn-fill animate-hover-btn" onClick={() => window.print()}>
              Print this invoice
            </button>
          </div>
          <div className="box-invoice">
            <div className="header">
              <div className="wrap-top">
                <div className="box-left">
                  <a href="/">
                    <img src="/assets/images/logo/logo.svg" alt="logo" className="logo" />
                  </a>
                </div>
                <div className="box-right">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="title">Invoice #</div>
                    <span className="code-num">0043128641</span>
                  </div>
                </div>
              </div>
              <div className="wrap-date">
                <div className="box-left">
                  <label>Invoice date:</label>
                  <span className="date">03/10/2024</span>
                </div>
                <div className="box-right">
                  <label>Due date:</label>
                  <span className="date">03/10/2024</span>
                </div>
              </div>
              <div className="wrap-info">
                <div className="box-left">
                  <div className="title">Supplier</div>
                  <div className="sub">Jobio LLC</div>
                  <p className="desc">
                    2301 Ravenswood Rd Madison, <br /> WI 53711
                  </p>
                </div>
                <div className="box-right">
                  <div className="title">Customer</div>
                  <div className="sub">John Doe</div>
                  <p className="desc">
                    329 Queensberry Street, North Melbourne <br /> VIC 3051, Australia.
                  </p>
                </div>
              </div>
              <div className="wrap-table-invoice">
                <table className="invoice-table">
                  <thead>
                    <tr className="title">
                      <th>Description</th>
                      <th>Price</th>
                      <th>VAT (20%)</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="content">
                      <td>Standard Plan</td>
                      <td>$443.00</td>
                      <td>$921.80</td>
                      <td>$9243</td>
                    </tr>
                    <tr className="content">
                      <td>Extra Plan</td>
                      <td>$413.00</td>
                      <td>$912.80</td>
                      <td>$5943</td>
                    </tr>
                    <tr className="content">
                      <td className="total">Total Due</td>
                      <td></td>
                      <td></td>
                      <td className="total">$9,750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="footer">
              <ul className="box-contact">
                <li>www.ecomus.com</li>
                <li>invoice@ecomus.com</li>
                <li>(123) 123-456</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>

        </>
    )
}
export default Invoice;