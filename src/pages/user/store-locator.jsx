import React from "react";
import StoreLocation from "./pages-components/about-us-components/store-location";
function StoreLocator() {
    return (
        <>
            {/* <!-- page-title --> */}
            <div class="tf-page-title style-2">
                <div class="container-full">
                    <div class="heading text-center">Store locations</div>
                </div>
            </div>
            {/* <!-- /page-title --> */}

            <StoreLocation/>

        </>
    )
}
export default StoreLocator;