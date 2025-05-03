import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainNavbar from "./components/Navbar/MainNavbar"
import HeroSection from "./pages/Home/HeroSection";
import SpecialOffers from "./pages/Home/SpecialOffers";
import FeatureList from "./pages/Home/FeatureList";
import ServiceSection from "./pages/Home/ServiceSection";
import PopularProducts from "./pages/Home/PopularProducts";
import CutomerFeedback from "./pages/Home/CutomerFeedback";
import Blogs from "./pages/Home/Blogs";
import Footer from "./components/Footer/Footer.jsx"

import Layout from "./components/Layout/Layout.jsx"
import AllProducts from "./pages/Product/AllProducts.jsx";

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
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/all-products" element={<Layout><AllProducts /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
