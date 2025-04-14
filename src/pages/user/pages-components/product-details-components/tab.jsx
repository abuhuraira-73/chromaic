import React, { useState } from "react";

function Tab() {
    const [activeTab, setActiveTab] = useState("Description");

    return (
        <>
            {/* <!-- tabs --> */}
            <section className="flat-spacing-17 pt_0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="widget-tabs style-has-border">
                                <ul className="widget-menu-tab">
                                    {["Description", "Additional Information", "Review", "Shipping", "Return Policies"].map((tab) => (
                                        <li 
                                            key={tab} 
                                            className={`item-title ${activeTab === tab ? "active" : ""}`} 
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            <span className="inner">{tab}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="widget-content-tab">
                                    {/* Description Tab */}
                                    {activeTab === "Description" && (
                                        <div className="widget-content-inner active">
                                            <p className="mb_30">
                                                Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity, and water supply.
                                            </p>
                                            <div className="tf-product-des-demo">
                                                <div className="right">
                                                    <h3 className="fs-16 fw-5">Features</h3>
                                                    <ul>
                                                        <li>Front button placket</li>
                                                        <li> Adjustable sleeve tabs</li>
                                                        <li>Babaton embroidered crest at placket and hem</li>
                                                    </ul>
                                                    <h3 className="fs-16 fw-5">Materials Care</h3>
                                                    <ul className="mb-0">
                                                        <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                                                        <li>Care: Hand wash</li>
                                                        <li>Imported</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Additional Information Tab */}
                                    {activeTab === "Additional Information" && (
                                        <div className="widget-content-inner active">
                                            <table className="tf-pr-attrs">
                                                <tbody>
                                                    <tr className="tf-attr-pa-color">
                                                        <th className="tf-attr-label">Color</th>
                                                        <td className="tf-attr-value">
                                                            <p>White, Pink, Black</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="tf-attr-pa-size">
                                                        <th className="tf-attr-label">Size</th>
                                                        <td className="tf-attr-value">
                                                            <p>S, M, L, XL</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {/* Review Tab */}
                                    {activeTab === "Review" && (
                                        <div className="widget-content-inner active">
                                            <div className="tab-reviews">
                                                <h1 className="number fw-6 text-center">4.8</h1>
                                                <div className="list-star text-center">
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                    <i className="icon icon-star"></i>
                                                </div>
                                                <p className="text-center">(168 Ratings)</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Shipping Tab */}
                                    {activeTab === "Shipping" && (
                                        <div className="widget-content-inner active">
                                            <p>Estimate delivery times: <strong>12-26 days</strong> (International), <strong>3-6 days</strong> (United States).</p>
                                            <p>Return within <strong>30 days</strong> of purchase. Duties & taxes are non-refundable.</p>
                                        </div>
                                    )}

                                    {/* Return Policies Tab */}
                                    {activeTab === "Return Policies" && (
                                        <div className="widget-content-inner active">
                                            <div className="tf-page-privacy-policy">
                                                <div className="title">The Company Private Limited Policy</div>
                                                <p>The Company Private Limited and each of their respective subsidiary, parent, and affiliated companies recognize that you care how information about you is used and shared.</p>
                                                <p>We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information, and the choices you have about the way your information is collected and used.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /tabs --> */}
        </>
    );
}

export default Tab;
