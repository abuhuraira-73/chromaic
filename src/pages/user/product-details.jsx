import React from "react";
import Breadcrumbs from "./pages-components/product-details-components/breadcrumbs";
import ProductDetailsMainContent from "./pages-components/product-details-components/product-details-main-content";
import ModalCompare from "./pages-components/product-details-components/modal-compare-color";
import ModalShare from "./pages-components/product-details-components/modal-share";
import ModalDeliveryReturn from "./pages-components/product-details-components/modal-delivery-return";
import ModalAskQuetion from "./pages-components/product-details-components/modal-ask-question";
import ProductSidebar from "./pages-components/product-details-components/product-details-sidebar";
import Tab from "./pages-components/product-details-components/tab";
import ProductGrid from "./pages-components/product-details-components/product-grid";
function ProductDetails(){
    return(
        <>
        <br/>
        <br/>
        <br/>
        <Breadcrumbs/>
        <ProductDetailsMainContent/>
        <Tab/>
        <ProductGrid/>


        {/* <!-- sidebar --> */}
        <div class="btn-sidebar-mobile d-flex start-0">
            <button class="type-hover" data-bs-toggle="offcanvas" data-bs-target="#sidebarmobile" aria-controls="offcanvasRight">
                <i class="icon-open"></i>
                <span class="fw-5">Open sidebar</span>
            </button>
        </div>
        {/* <!-- /sidebar --> */}
        <ModalCompare/>
        <ModalShare/>
        <ModalDeliveryReturn/>
        <ModalAskQuetion/>
        <ProductSidebar/>
        </>
    )
}
export default ProductDetails;