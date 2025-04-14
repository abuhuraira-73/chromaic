import React from "react"
function AccountSidebar() {
    return (
        <>
            {/* <!-- sidebar account--> */}
            <div class="offcanvas offcanvas-start canvas-filter canvas-sidebar canvas-sidebar-account" id="mbAccount">
                <div class="canvas-wrapper">
                    <header class="canvas-header">
                        <span class="title">SIDEBAR ACCOUNT</span>
                        <span class="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
                    </header>
                    <div class="canvas-body sidebar-mobile-append"> </div>
                </div>
            </div>
            {/* <!-- End sidebar account --> */}
            <option value="---" data-provinces="[]">---</option>

        </>
    )
}
export default AccountSidebar;

