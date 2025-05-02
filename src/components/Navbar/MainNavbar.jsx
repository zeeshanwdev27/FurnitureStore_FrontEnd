import React from "react";
import roiserLogo from "../../assets/ROISER.png";

import sort from "../../assets/sort.svg";
import profile from "../../assets/profile.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";

import Topbar from "./Topbar.jsx";
import Navbar from "./Navbar.jsx";
import BottomBanner from "./BottomBanner.jsx";

//MaterialUI
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function MainNavbar() {
  return (
    <>
      <Topbar />
      <Navbar />

      <nav className="py-6 px-35 w-full flex justify-between items-center bg-white border border-gray-200">
        {/* Left side - Brand and Categories */}
        <div className="flex items-center gap-22">
          <div className="brand-name flex items-center gap-2">
            <img
              className="w-10 h-10 object-contain"
              src={roiserLogo}
              alt="roiserlogo"
            />
            <p className="text-xl font-bold text-gray-800">ROISER</p>
          </div>

          <div className="dropdown-btn">
            <PopupState variant="popover" popupId="categories-menu">
              {(popupState) => (
                <>
                  <button
                    {...bindTrigger(popupState)}
                    className="bg-gray-100 border border-gray-100 text-black font-medium rounded-sm px-5 py-1.5 hover:bg-gray-200 flex items-center gap-1 hover:cursor-pointer"
                  >
                    <img src={sort} alt="sort icon" className="w-5 h-5" />
                    Categories
                  </button>
                  <Menu
                    {...bindMenu(popupState)}
                    MenuListProps={{
                      className: "w-[170px]",
                    }}
                    PaperProps={{
                      className: "mt-1.5",
                    }}
                  >
                    <MenuItem onClick={popupState.close}>Tables</MenuItem>
                    <MenuItem onClick={popupState.close}>Sofas</MenuItem>
                    <MenuItem onClick={popupState.close}>Chairs</MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </div>
        </div>

        {/* Center - Search bar */}
        <div className="ml-3 search-bar flex-1 max-w-2xl relative flex items-center">
          <input
            type="text"
            className="bg-white w-5/6 pl-4 pr-10 py-2 border border-[#999999] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
            placeholder="Search for products, categories or brands"
          />
          <div className="absolute right-[18.666%] flex items-center pointer-events-none pt-1">
            <img src={search} alt="search" className="h-4 w-4" />
          </div>
        </div>

        {/* Right side - Icons */}
        <div className="icons">
          <ul className="flex items-center gap-6">
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer gap-1 flex justify-around items-center">
              <img src={cart} alt="cart" className="w-5 h-5" />
              <div className="text-sm">$0.00</div>
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
