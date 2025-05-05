import React, { useState } from "react";
import roiserLogo from "../../assets/ROISER.png";

import sort from "../../assets/sort.svg";
import profile from "../../assets/profile.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";

import Topbar from "./Topbar.jsx";
import BottomBanner from "./BottomBanner.jsx";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext.jsx"

function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart } = useCart();

    const navigate = useNavigate();

    const handleHomeClick = () => {
      navigate("/");
    };

    const handleCategoryClick = (category) => {
      navigate(`/api/category/${category}`);
      setIsMobileMenuOpen(false); 
    };

  return (
    <>
      <Topbar />
      {/* <Navbar /> */}

      <nav className="bg-white border border-gray-200 md:px-6 lg:px-35 py-4">
        {/* Top Row for All Screens */}
        <div className="flex items-center justify-between px-[25px] lg:hidden">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={roiserLogo} alt="roiserlogo" className="w-10 h-10 hover:cursor-pointer" onClick={handleHomeClick} />
            <p className="text-xl font-bold text-gray-800 hover:cursor-pointer" onClick={handleHomeClick}>ROISER</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <img src={search} alt="search" className="w-5 h-5" />
            </button>

            {/* Hamburger Icon */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Expanded Search Input (Mobile Only) */}
        {isSearchOpen && (
          <div className="mt-4 lg:hidden px-10">
            <input
              type="text"
              className="w-full pl-4 pr-10 py-2 border border-[#999999] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Search for products, categories or brands"
            />
          </div>
        )}

        {/* Mobile Menu Content (Toggleable) */}
        {isMobileMenuOpen && (
          <div className="mt-4 flex flex-col gap-4 lg:hidden px-10">
            {/* Categories Button */}
            <div className="flex flex-col gap-2">
              <button onClick={() => handleCategoryClick("Tables")} className="text-left text-sm text-gray-700 py-1 hover:bg-gray-100 rounded-md">Tables</button>
              <button onClick={() => handleCategoryClick("Sofas")}  className="text-left text-sm text-gray-700 py-1 hover:bg-gray-100 rounded-md">Sofas</button>
              <button onClick={() => handleCategoryClick("Chairs")} className="text-left text-sm text-gray-700 py-1 hover:bg-gray-100 rounded-md">Chairs</button>
            </div>


            {/* Icons */}
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                <img src={cart} onClick={toggleCart} alt="cart" className="w-5 h-5" />
                {/* <div className="text-sm hidden">$0.00</div> */}
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <img src={heart} alt="heart" className="w-5 h-5" />
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <img src={profile} alt="profile" className="w-5 h-5" />
              </li>
            </ul>
          </div>
        )}

        {/* Large Screen Layout (Unchanged) */}
        <div className="hidden lg:flex justify-between items-center mt-4 lg:mt-0">
          {/* Left - Logo + Categories */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img src={roiserLogo} alt="roiserlogo" className="w-10 h-10 hover:cursor-pointer" onClick={handleHomeClick} />
              <p className="text-xl font-bold text-gray-800 hover:cursor-pointer" onClick={handleHomeClick}>ROISER</p>
            </div>
            <PopupState variant="popover" popupId="categories-menu-lg">
              {(popupState) => (
                <>
                  <button
                    {...bindTrigger(popupState)}
                    className="bg-gray-100 border text-black font-medium rounded-sm px-4 py-2 flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    <img src={sort} alt="sort icon" className="w-5 h-5" />
                    Categories
                  </button>
                  <Menu
                    {...bindMenu(popupState)}
                    MenuListProps={{ className: "w-[170px]" }}
                    PaperProps={{ className: "mt-1.5" }}
                  >
                    <MenuItem onClick={()=>{
                      popupState.close();
                      navigate("/api/category/Tables");
                    }}>
                    Tables
                    </MenuItem>
                    <MenuItem onClick={()=>{
                      popupState.close();
                      navigate("/api/category/Sofas");
                    }}>
                    Sofas
                    </MenuItem>
                    <MenuItem onClick={()=>{
                      popupState.close();
                      navigate("/api/category/Chairs");
                    }}>
                    Chairs
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-2xl relative flex items-center mx-8">
            <input
              type="text"
              className="w-full pl-4 pr-10 py-2 border border-[#999999] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Search for products, categories or brands"
            />
            <div className="absolute right-3 flex items-center pointer-events-none pt-1">
              <img src={search} alt="search" className="h-4 w-4" />
            </div>
          </div>

          {/* Right - Icons */}
          <ul className="flex items-center gap-6">
            <li onClick={toggleCart} className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <img src={cart} alt="cart" className="w-5 h-5" />
              {/* <div className="text-sm">$0.00</div> */}
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <img src={heart} alt="heart" className="w-5 h-5" />
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <img src={profile} alt="profile" className="w-5 h-5" />
            </li>
          </ul>
        </div>
      </nav>

      <BottomBanner />
    </>
  );
}

export default MainNavbar;
