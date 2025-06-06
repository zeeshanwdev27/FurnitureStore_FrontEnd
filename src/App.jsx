import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home components
import HeroSection from "./pages/Home/HeroSection";
import SpecialOffers from "./pages/Home/SpecialOffers";
import FeatureList from "./pages/Home/FeatureList";
import ServiceSection from "./pages/Home/ServiceSection";
import PopularProducts from "./pages/Home/PopularProducts";
import CutomerFeedback from "./pages/Home/CutomerFeedback";
import Blogs from "./pages/Home/Blogs";

// Layout and product components
import Layout from "./components/Layout/Layout.jsx";
import AllProducts from "./pages/Product/AllProducts.jsx";
import CategoryProducts from "./pages/Product/CategoryProducts.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";

// Utility components
import ScrollToTop from "./components/Scroll/ScrollToTop.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import SearchResults from "./pages/SearchResult/SearchResults.jsx";

// Auth components
import SignIn from "./pages/Account/Sign-in/SignIn.jsx";
import SignUp from "./pages/Account/Sign-up/SignUp.jsx";
import Logout from "./pages/Account/Log-out/LogOut.jsx";

// Checkout components
import Checkouts from "./pages/Checkout/Checkouts.jsx";
import OrderConfirm from "./pages/Checkout/OrderConfirm.jsx";

// Protected route
import ProtectedRoute from "./components/Protected/ProtectedRoute.jsx";

function HomePage() {
  return (
    <>
      <HeroSection />
      <SpecialOffers />
      <FeatureList />
      <ServiceSection />
      <PopularProducts />
      <CutomerFeedback />
      <Blogs />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/products" element={<Layout><AllProducts /></Layout>} />
          <Route path="/category/:categoryName" element={<Layout><CategoryProducts /></Layout>} />
          <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
          <Route path="/search" element={<Layout><SearchResults /></Layout>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />

          {/* Protected routes */}
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Layout><Checkouts /></Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/order-confirmation/:orderId" element={
            <ProtectedRoute>
              <Layout><OrderConfirm /></Layout>
            </ProtectedRoute>
          } />

          {/* 404 Page */}
          <Route path="*" element={<Layout><div>404 Not Found</div></Layout>} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;