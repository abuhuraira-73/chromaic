import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/home";
import Layout from "./components/user/layout/Layout";
import Shop from "./pages/user/shop";
import AboutUs from "./pages/user/about-us";
import OurStore from "./pages/user/our-store";
import Timeline from "./pages/user/timeline";
import StoreLocator from "./pages/user/store-locator";
import StoreLocation from "./pages/user/pages-components/about-us-components/store-location";
import BlogGrid from "./pages/user/blog-grid";
import BlogDetails from "./pages/user/blog-details";
import ContactUs from "./pages/user/contact-us";
import ProductDetails from "./pages/user/product-details";
import Faq from "./pages/user/faq";
import Cart from "./pages/user/cart";
import Wishlist from "./pages/user/wishlist";
import Compare from "./pages/user/compare";
import Checkout from "./pages/user/checkout";
import PaymentConfirmation from "./pages/user/payment-confirmation";
import PaymentFail from "./pages/user/payment-fail";
import Invoice from "./pages/user/invoice";
import Error from "./pages/user/error";
import MyAccount from "./pages/user/my-account/my-account";
import MyAccountOrders from "./pages/user/my-account/my-account-orders";
import MyAccountOrderDetails from "./pages/user/my-account/my-account-order-details";
import MyAccountAddress from "./pages/user/my-account/my-account-address";
import MyAccountEditDetails from "./pages/user/my-account/my-account-edit-details";
import MyAccountWishlist from "./pages/user/my-account/my-account-wishlist";

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdetails" element={<ProductDetails/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourstore" element={<OurStore />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/storelocator" element={<StoreLocator />} />
          <Route path="/storelocation" element={<StoreLocation />} />
          <Route path="/bloggrid" element={<BlogGrid />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="/payment-fail" element={<PaymentFail />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/error" element={<Error />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myaccountorders" element={<MyAccountOrders />} />
          <Route path="/myaccountorderdetails" element={<MyAccountOrderDetails />} />
          <Route path="/myaccountaddress" element={<MyAccountAddress />} />
          <Route path="/myaccounteditdetails" element={<MyAccountEditDetails />} />
          <Route path="/myaccountwishlist" element={<MyAccountWishlist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
