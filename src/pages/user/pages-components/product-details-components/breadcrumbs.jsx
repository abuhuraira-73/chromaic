import React from "react";
function Breadcrumbs(){
    return(
        <>
                {/* <!-- breadcrumb --> */}
        <div class="tf-breadcrumb">
            <div class="container">
                <div class="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
                    <div class="tf-breadcrumb-list">
                        <a href="index-2.html" class="text">Home</a>
                        <i class="icon icon-arrow-right"></i>
                        <a href="#" class="text">Women</a>
                        <i class="icon icon-arrow-right"></i>
                        <span class="text">Cotton jersey top</span>
                    </div>
                    <div class="tf-breadcrumb-prev-next">
                        <a href="#" class="tf-breadcrumb-prev hover-tooltip center">
                            <i class="icon icon-arrow-left"></i>
                        </a>
                        <a href="#" class="tf-breadcrumb-back hover-tooltip center">
                            <i class="icon icon-shop"></i>
                        </a>
                        <a href="#" class="tf-breadcrumb-next hover-tooltip center">
                            <i class="icon icon-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /breadcrumb --> */}


        </>
    )
}
export default Breadcrumbs;