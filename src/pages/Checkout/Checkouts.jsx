import React, { useState } from "react";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useCart } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Checkouts() {
  const {
    cartItems,
    removeFromCart,
    subtotal: contextSubtotal,
    shipping: contextShipping,
    total: contextTotal,
  } = useCart();

  const navigate = useNavigate()

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPromoApplied, setIsPromoApplied] = useState(false);



  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "summer10" && !isPromoApplied) {
      setDiscount(10);
      setIsPromoApplied(true);
    } else if (isPromoApplied) {
      alert("Promo code already applied");
    } else {
      alert("Invalid promo code");
    }
  };

  const removePromoCode = () => {
    setDiscount(0);
    setIsPromoApplied(false);
    setPromoCode("");
  };

  // Calculate totals with discount
  const subtotal = contextSubtotal;
  const shipping = contextShipping;
  const tax = 5; // You might want to move this to context if it's used elsewhere
  const total = subtotal + shipping + tax - discount;

  // Conver Image Into String
  const getImageUrl = (item) => {
    // If image is a string URL, use it directly
    if (typeof item.image === "string") {
      return item.image;
    }
    // If image is an object (like from MongoDB), construct the URL
    if (item.image && item.image.url) {
      return item.image.url;
    }
    // Fallback to a placeholder if no image is available
    // return "https://via.placeholder.com/60";
  };

  const handleContinueShopping =()=>{
    navigate('/api/all-products')
  }
  
  const handlePurchase = ()=>{
    alert("Order Confirm")
  }

  return (
    <div className="bg-white px-6 sm:px-10 lg:px-20 py-6 lg:py-10">
      <div className="max-w-screen-xl max-md:max-w-xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
          {/* Delivery Form */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-xl p-6">
            <form>
              <h2 className="text-xl text-slate-900 font-semibold mb-6">
                Delivery Details
              </h2>
              <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                {[
                  {
                    label: "First Name",
                    type: "text",
                    placeholder: "Enter First Name",
                  },
                  {
                    label: "Last Name",
                    type: "text",
                    placeholder: "Enter Last Name",
                  },
                  { label: "Email", type: "email", placeholder: "Enter Email" },
                  {
                    label: "Phone No.",
                    type: "number",
                    placeholder: "Enter Phone No.",
                  },
                  {
                    label: "Address Line",
                    type: "text",
                    placeholder: "Enter Address Line",
                  },
                  { label: "City", type: "text", placeholder: "Enter City" },
                  { label: "State", type: "text", placeholder: "Enter State" },
                  {
                    label: "Zip Code",
                    type: "text",
                    placeholder: "Enter Zip Code",
                  },
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="text-sm text-slate-900 font-medium block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="px-4 py-2.5 bg-white border border-gray-300 text-slate-900 w-full text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#885B3A] transition-all duration-150"
                    />
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mt-12 max-w-md">
                <p className="text-slate-900 text-sm font-medium mb-2">
                  Do you have a promo code?
                </p>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="px-4 py-2.5 bg-white border border-gray-300 text-slate-900 w-full text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#885B3A] transition-all duration-150"
                  />
                  {isPromoApplied ? (
                    <button
                      type="button"
                      onClick={removePromoCode}
                      className="flex items-center justify-center font-medium tracking-wide bg-red-500 hover:bg-red-600 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer transition hover:shadow-md transform hover:-translate-y-[1px]"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={applyPromoCode}
                      className="flex items-center justify-center font-medium tracking-wide bg-[#885B3A] hover:bg-[#774A2A] px-4 py-2.5 rounded-md text-sm text-white cursor-pointer transition hover:shadow-md transform hover:-translate-y-[1px]"
                    >
                      Apply
                    </button>
                  )}
                </div>
                {isPromoApplied && (
                  <p className="text-green-600 text-sm mt-2">
                    Promo code applied! $10 discount added.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary with Cart Items */}
          <div className="relative bg-white shadow-md rounded-xl p-6 lg:sticky lg:top-10">
            <h2 className="text-xl text-slate-900 font-semibold mb-6">
              Order Summary
            </h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4">
                  <img
                    src={getImageUrl(item)}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      // e.target.src = "https://via.placeholder.com/60";
                    }}
                  />
                  <div className="flex-5">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Qty: {item.quantity || 1}
                    </p>
                    <p className="text-sm font-medium text-slate-800">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                  <img
                    onClick={() => removeFromCart(item._id)}
                    src={deleteIcon}
                    alt="deleteIcon"
                    className="hover:opacity-100 hover:cursor-pointer opacity-50"
                  />
                </div>
              ))}

              {cartItems.length === 0 && (
                <p className="text-sm text-slate-500 italic">
                  Your cart is empty.
                </p>
              )}
            </div>

            {/* Totals */}
            <ul className="text-slate-500 font-medium space-y-4 text-sm">
              <li className="flex justify-between">
                Subtotal{" "}
                <span className="font-semibold text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between">
                Discount
                <span
                  className={`font-semibold ${
                    discount > 0 ? "text-red-500" : "text-slate-900"
                  }`}
                >
                  -${discount.toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between">
                Shipping{" "}
                <span className="font-semibold text-slate-900">
                  ${shipping.toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between">
                Tax{" "}
                <span className="font-semibold text-slate-900">
                  ${tax.toFixed(2)}
                </span>
              </li>
              <hr className="border-slate-300 my-2" />
              <li className="flex justify-between font-semibold text-slate-900 text-[15px]">
                Total <span>${total.toFixed(2)}</span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-y-4 mt-8">
              <button
                type="button"
                onClick={handlePurchase}
                className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-[#885B3A] hover:bg-[#774A2A] text-white cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Complete Purchase
              </button>
              <button
                type="button"
                onClick={handleContinueShopping}
                className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 border border-gray-300 text-slate-900 cursor-pointer transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkouts;
