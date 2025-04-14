import React from "react";
import BlogDetailsComponent from "./pages-components/blog-componets/blog-details-component";
function BlogDetails() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />

            {/* <!-- page-title --> */}
            <div class="tf-page-title">
                <div class="container-full">
                    <div class="row">
                        <div class="col-12">
                            <div class="heading text-center">Blog Details</div>
                            <ul class="breadcrumbs d-flex align-items-center justify-content-center">
                                <li>
                                    <a href="index-2.html">Home</a>
                                </li>
                                <li>
                                    <i class="icon-arrow-right"></i>
                                </li>
                                <li>
                                    Fashion
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /page-title --> */}
            <BlogDetailsComponent/>


        </>
    )
}
export default BlogDetails;