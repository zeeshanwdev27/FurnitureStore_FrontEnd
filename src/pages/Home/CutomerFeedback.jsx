import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alexis D. Dowson",
    role: "Verified Furniture Buyer",
    rating: 5,
    message:
      "I bought dining set which is stunning—top-notch quality and exactly what I needed!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marcus L. Bennett",
    role: "Loyal Customer",
    rating: 5,
    message:
      "My custom sofa arrived on time and looks amazing in the living room. Super comfy too!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Nathan Foster",
    role: "Returning Customer",
    rating: 5,
    message:
      "This is my third order and every piece has exceeded expectations. Great craftsmanship.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jamie Rice",
    role: "Happy Homeowner",
    rating: 5,
    message:
      "The walnut coffee table I ordered brought my whole space together. Truly elegant.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Calvin Griffin",
    role: "Interior Design Enthusiast",
    rating: 5,
    message:
      "Beautiful chairs, excellent support team, and fast delivery. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Shelly Jennings",
    role: "First-Time Buyer",
    rating: 5,
    message:
      "Ordering was easy, and the bed frame I got feels luxurious and sturdy. Love it!",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    name: "Vanessa Nguyen",
    role: "Verified Furniture Buyer",
    rating: 5,
    message:
      "Absolutely love the bookshelf I purchased. Solid wood, elegant finish—perfect for my office.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

function CutomerFeedback() {
  return (
    <div className="bg-[#885B3A] py-15 px-40 text-center text-white">
      <h2 className="text-2xl font-bold mb-10">HAPPY CUSTOMERS</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testi, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white text-black rounded-lg p-6 shadow-md h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Product Quality</p>
                <div className="text-[#885B3A] text-lg mr-5">★ ★ ★ ★ ★</div>
              </div>
              <p className="text-sm text-left mb-6">“{testi.message}”</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold">{testi.name}</p>
                  <p className="text-xs">{testi.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom styling for Swiper arrows and bullets */}
      <style>
        {`
    .swiper-button-prev,
    .swiper-button-next {
      color: black !important;
    }

    .swiper-pagination-bullet {
      background-color: white !important;
      opacity: 0.7;
    }

    .swiper-pagination-bullet-active {
      background-color: black !important;
      opacity: 1;
    }

    .swiper-pagination {
      margin-top: 50px;
      position: relative;
      bottom: -10px;
    }
  `}
      </style>
    </div>
  );
}

export default CutomerFeedback;
