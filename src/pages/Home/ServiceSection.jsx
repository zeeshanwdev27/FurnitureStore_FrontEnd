import React from "react";

function ServiceSection() {
  return (
    <div className="flex h-[78vh]">

      {/* Image Side */}
      <div className="w-2/5 h-full">
        <img
          src="https://responsa.ai/wp-content/uploads/2021/12/people-store-assistant-shop-floor-walls-tiles-edited-1.jpg"
          alt="service"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Side */}
      <div className="w-3/5 h-full bg-[#885B3A] text-white px-20 py-15 flex flex-col justify-between gap-8">
        {/* Title Section */}
        <div className="space-y-4">
          <p className="text-2xl font-bold">WE'RE ONLINE FURNITURE SELLER</p>
          <p className="text-base max-w-lg">
            Discover stylish, high-quality furniture delivered straight to your door.
            From elegant tables to cozy chairs, we offer handcrafted pieces designed to
            elevate your living space with comfort and character.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          {[
            {
              icon: "chair",
              title: "PURE FINISHED TABLE",
              desc: "Crafted with precision and care, our tables bring warmth and sophistication to any space.",
            },
            {
              icon: "support_agent",
              title: "24/7 SUPPORT & SERVICE",
              desc: "Our dedicated team is here to assist you anytime with your orders or product queries.",
            },
            {
              icon: "shoppingmode",
              title: "OFFERS AND DISCOUNTS",
              desc: "Enjoy exclusive deals and seasonal discounts across our entire furniture collection.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={icon} className="flex items-center gap-4">
              <div className="bg-white p-2 px-3 rounded-full">
                <span className="material-symbols-outlined text-[#885B3A] text-4xl">
                  {icon}
                </span>
              </div>
              <div>
                <p className="text-md font-bold">{title}</p>
                <p className="text-sm max-w-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default ServiceSection;
