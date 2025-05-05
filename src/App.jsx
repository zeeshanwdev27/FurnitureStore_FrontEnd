import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./pages/Home/HeroSection";
import SpecialOffers from "./pages/Home/SpecialOffers";
import FeatureList from "./pages/Home/FeatureList";
import ServiceSection from "./pages/Home/ServiceSection";
import PopularProducts from "./pages/Home/PopularProducts";
import CutomerFeedback from "./pages/Home/CutomerFeedback";
import Blogs from "./pages/Home/Blogs";

import Layout from "./components/Layout/Layout.jsx"
import AllProducts from "./pages/Product/AllProducts.jsx";
import CategoryProducts from "./pages/Product/CategoryProducts.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";

import ScrollToTop from "./components/Scroll/ScrollToTop.jsx";    //use because when i navigate, screen is still on point where i was before

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
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/api/all-products" element={<Layout><AllProducts /></Layout>} />
        <Route path="/api/category/:categoryName" element={<Layout><CategoryProducts /></Layout>} />
        <Route path="/api/product/:id" element={<Layout><ProductDetail /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
