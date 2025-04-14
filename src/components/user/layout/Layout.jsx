import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import Outlet
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "../../../pages/user/pages-components/mobile-components/mobile-menu";
import BottomToolbar from "../../../pages/user/pages-components/mobile-components/bottom-toolbar";
import CanvasSearch from "../../../pages/user/pages-components/mobile-components/canvas-search";
import ModalLogin from "../../../pages/user/pages-components/mobile-components/modal-login-register";
import ShoppingCart from "../../../pages/user/pages-components/mobile-components/shopping-cart";
import ModalCompare from "../../../pages/user/pages-components/mobile-components/modal-compare";
import QuickAdd from "../../../pages/user/pages-components/mobile-components/modal-quick-add";
import QuickView from "../../../pages/user/pages-components/mobile-components/modal-quick-view";
import FindSizeModal from "../../../pages/user/pages-components/mobile-components/modal-find-size";
import ToolbarShopmb from "../../../pages/user/pages-components/mobile-components/toolbar-shop-mb";

function Layout() {
    const location = useLocation();

    // Pages where header & footer should be hidden
    const noHeaderFooterPages = ["/invoice", "/error"];
    const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

    return (
        <div id="wrapper">
            {/* Conditionally render Header */}
            {!hideHeaderFooter && <Header />}

            <main>
                {/* Render nested routes */}
                <Outlet />
            </main>

            {/* Conditionally render Footer */}
            {!hideHeaderFooter && <Footer />}

            {/* Go to top */}
            <div className="progress-wrap">
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: "stroke-dashoffset 10ms linear 0s",
                            strokeDasharray: "307.919, 307.919",
                            strokeDashoffset: "286.138",
                        }}
                    ></path>
                </svg>
            </div>

            {/* Mobile Navigation */}
            <MobileMenu />
            <BottomToolbar />
            <CanvasSearch />
            <ModalLogin />
            <ShoppingCart />
            <ModalCompare />
            <QuickAdd />
            <QuickView />
            <FindSizeModal />
            <ToolbarShopmb />
        </div>
    );
}

export default Layout;
