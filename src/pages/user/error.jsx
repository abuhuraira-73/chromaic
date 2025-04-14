import React from "react";
function Error() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {/* <!-- page-404 --> */}
        <section class="page-404-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="image">
                            <img src="/assets/images/item/404.svg" alt=""/>
                        </div>
                        <div class="title">
                            Oops...That link is broken.
                        </div>
                        <p>Sorry for the inconvenience. Go to our homepage to check out our latest collections.</p>
                        <a href="shop-default.html" class="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">Shop now</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- /page-404 --> */}

        </>
    )
}
export default Error;