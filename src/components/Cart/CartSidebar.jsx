import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    isCartOpen,
    toggleCart,
    subtotal = 0,
    shipping = 5,
    total = subtotal + shipping,
  } = useCart();

  const navigate = useNavigate();

  
  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      // User is authenticated, proceed to checkout
      navigate("/api/checkout");
    } else {
      // User not authenticated, redirect to sign-in with return URL
      navigate("/api/signin", {
        state: { from: { pathname: "/api/checkout" } },
      });
    }

  };

  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-sm bg-white shadow-lg transition-transform duration-300 z-50 flex flex-col
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        h-[500px] sm:h-[550px] lg:h-screen
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-gray-500 text-lg hover:cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Scrollable Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 mb-4 border-b pb-2"
            >
              <img
                src={item.image?.url}
                alt={item.name}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 font-bold hover:cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* Fixed Summary at Bottom */}
      {cartItems.length > 0 && (
        <div className="p-4 border-t bg-white">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-md mt-1">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-[#885B3A] hover:cursor-pointer"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
