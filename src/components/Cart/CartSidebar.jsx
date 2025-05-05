// components/CartSidebar.jsx
import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    isCartOpen,
    toggleCart,
    subtotal,
    shipping,
    total,
  } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 transition-transform duration-300 z-50 flex flex-col ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-gray-500 text-lg hover:cursor-pointer">
          ✕
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto">
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

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="pt-4 border-t mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-md">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-[#885B3A]">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
