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
import { useCart } from "../../context/CartContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainNavbar() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Enhanced authentication check
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return !!token && !!user;
  };

  const user = isAuthenticated()
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    navigate(`/api/category/${category}`);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = (event) => {
    if (isAuthenticated()) {
      setProfileAnchorEl(event.currentTarget);
    } else {
      navigate("/api/signin", {
        state: { from: { pathname: window.location.pathname } },
      });
    }
  };

  const handleCloseProfileMenu = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setProfileAnchorEl(null);
      navigate("/");
      toast.success("Successfully logged out!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <>
      <Topbar />
      <nav className="bg-white border border-gray-200 md:px-6 lg:px-35 py-4">
        {/* Mobile View */}
        <div className="flex items-center justify-between px-[25px] lg:hidden">
          <div className="flex items-center gap-2">
            <img
              src={roiserLogo}
              alt="roiserlogo"
              className="w-10 h-10 hover:cursor-pointer"
              onClick={handleHomeClick}
            />
            <p
              className="text-xl font-bold text-gray-800 hover:cursor-pointer"
              onClick={handleHomeClick}
            >
              ROISER
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src={cart}
                onClick={toggleCart}
                alt="cart"
                className="w-5 h-5 hover:cursor-pointer"
              />
              <img
                src={heart}
                alt="heart"
                className="w-5 h-5 hover:cursor-pointer"
              />
              <img
                src={profile}
                alt="profile"
                className="w-5 h-5 hover:cursor-pointer"
                onClick={handleProfileClick}
              />
            </div>

            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <img src={search} alt="search" className="w-5 h-5" />
            </button>

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

        {isSearchOpen && (
          <div className="mt-4 lg:hidden px-10">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/api/search?q=${searchTerm}`);
                  setSearchTerm("");
                }
              }}
              className="w-full pl-4 pr-10 py-2 border border-[#999999] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Search for products, categories or brands"
            />
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="mt-4 flex flex-col gap-4 lg:hidden px-10">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleCategoryClick("Tables")}
                className="text-left text-sm text-gray-700 py-1 hover:bg-gray-100 rounded-md"
              >
                Tables
              </button>
              <button
                onClick={() => handleCategoryClick("Sofas")}
                className="text-left text-sm text-gray-700 py-1 hover:bg-gray-100 rounded-md"
              >
                Sofas
              </button>
              <button
                onClick={() => handleCategoryClick("Chairs")}
                className="text-left text-sm text-gray-700 py-1 hover:bg-gray-100 rounded-md"
              >
                Chairs
              </button>
            </div>
          </div>
        )}

        {/* Desktop View */}
        <div className="hidden lg:flex justify-between items-center mt-4 lg:mt-0">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img
                src={roiserLogo}
                alt="roiserlogo"
                className="w-10 h-10 hover:cursor-pointer"
                onClick={handleHomeClick}
              />
              <p
                className="text-xl font-bold text-gray-800 hover:cursor-pointer"
                onClick={handleHomeClick}
              >
                ROISER
              </p>
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
                    className="[&>.MuiPaper-root]:w-40 mt-1" // Sets width to 256px (Tailwind's w-64)
                  >
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        navigate("/api/category/Tables");
                      }}
                      className="text-base py-3 px-4" // Bigger text and padding
                    >
                      Tables
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        navigate("/api/category/Sofas");
                      }}
                      className="text-base py-3 px-4"
                    >
                      Sofas
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        navigate("/api/category/Chairs");
                      }}
                      className="text-base py-3 px-4"
                    >
                      Chairs
                    </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </div>

          <div className="flex-1 max-w-2xl relative flex items-center mx-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/api/search?q=${searchTerm}`);
                  setSearchTerm("");
                }
              }}
              className="w-full pl-4 pr-10 py-2 border border-[#999999] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Search for products, categories or brands"
            />
            <div
              className="absolute right-3 flex items-center pt-1 hover:cursor-pointer"
              onClick={() => {
                if (searchTerm.trim()) {
                  navigate(`/api/search?q=${searchTerm}`);
                  setSearchTerm("");
                }
              }}
            >
              <img src={search} alt="search" className="h-4 w-4" />
            </div>
          </div>

          <ul className="flex items-center gap-6">
            <li
              onClick={toggleCart}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <img src={cart} alt="cart" className="w-5 h-5" />
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <img src={heart} alt="heart" className="w-5 h-5" />
            </li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <img
                src={profile}
                alt="profile"
                className="w-5 h-5"
                onClick={handleProfileClick}
              />
              <Menu
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={handleCloseProfileMenu}
                sx={{
                  "& .MuiPaper-root": {
                    minWidth: "200px",
                    borderRadius: "0.375rem", // rounded-md
                    boxShadow:
                      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", // shadow-lg
                    padding: "0.25rem 0", // space-y-1
                  },
                  "& .MuiMenuItem-root": {
                    fontSize: "0.875rem", // text-sm
                    padding: "0.5rem 1rem", // px-4 py-2
                  },
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "#f3f4f6", // bg-gray-100
                  },
                  "& .MuiMenuItem-root:active": {
                    backgroundColor: "#e5e7eb", // bg-gray-200
                  },
                  "& .MuiMenuItem-root.Mui-disabled": {
                    opacity: 1,
                    color: "#111827", // text-gray-900
                  },
                }}
              >
                {isAuthenticated() && (
                  <>
                    <MenuItem disabled>
                      <span className="font-medium">Hi, {user?.username}</span>
                    </MenuItem>
                    <MenuItem
                      onClick={handleLogout}
                      className="text-red-600 hover:bg-red-50" // Custom hover state
                    >
                      Sign Out
                    </MenuItem>
                  </>
                )}
              </Menu>
            </li>
          </ul>
        </div>
      </nav>

      <BottomBanner />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MainNavbar;
