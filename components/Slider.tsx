"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop",
      alt: "Dental Clinic"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop",
      alt: "Modern Store"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      alt: "Shop Interior"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&h=600&fit=crop",
      alt: "Business Space"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full   overflow-hidden">
      {/* Slides */}
      <div className="relative w-full sm:h-[600px] h-[300px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 rounded-3xl ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
          </div>
        ))}
      </div>

      

      {/* View Shop Button */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          View Shop
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;