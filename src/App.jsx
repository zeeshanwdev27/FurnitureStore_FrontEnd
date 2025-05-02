import "./App.css";
import MainNavbar from "./components/Navbar/MainNavbar"
import HeroSection from "./pages/Home/HeroSection";
import SpecialOffers from "./pages/Home/SpecialOffers";
import FeatureList from "./pages/Home/FeatureList";
import ServiceSection from "./pages/Home/ServiceSection";
import PopularProducts from "./pages/Home/PopularProducts";
import CutomerFeedback from "./pages/Home/CutomerFeedback";
import Blogs from "./pages/Home/Blogs";
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <>
    <div>
    <MainNavbar/>
    <HeroSection/>
    <SpecialOffers/>
    <FeatureList/>
    <ServiceSection/>
    <PopularProducts/>
    <CutomerFeedback/>
    <Blogs/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
