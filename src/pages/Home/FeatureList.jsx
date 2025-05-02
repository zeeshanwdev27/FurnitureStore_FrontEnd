import React, { useEffect, useState } from "react";

function FeatureList() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 8)))
      .catch((err) => console.error("Error Fetching Products", err));
  }, []);

  return (
    <div className="h-80vh bg-gray-100 px-35 py-15">

      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-3xl font-bold">FEATURED ITEMS</p>
        <ul className="flex justify-center items-center gap-5 font-medium">
          <li className="hover:cursor-pointer hover:text-[#885B3A]">HOT ITEMS</li>
          <li className="hover:cursor-pointer hover:text-[#885B3A]">BEST SELLERS</li>
          <li className="hover:cursor-pointer hover:text-[#885B3A]">ON SALE</li>
          <li className="hover:cursor-pointer hover:text-[#885B3A]">NEW ARRIVALS</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (

          <div key={product._id} className="bg-white p-4 shadow rounded transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:cursor-pointer">
            <img
              src={product.image?.url}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-lg">{product.name}</p>
            <div className="text-[#885B3A]">★ ★ ★ ★ ☆</div>
            <p className="text-black font-semibold">${product.price}</p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default FeatureList;
