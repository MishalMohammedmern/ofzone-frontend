"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover Innovation",
      subtitle: "Transform Your Digital Experience",
      description: "Cutting-edge solutions that drive your business forward",
      bgGradient: "from-purple-600 via-pink-600 to-blue-600",
      image: "/hero1.jfif"
    },
    {
      id: 2,
      title: "Build The Future",
      subtitle: "Technology Meets Design",
      description: "Creating experiences that inspire and engage",
      bgGradient: "from-cyan-500 via-blue-600 to-purple-600",
      image: "/hero2.jfif"
    },
    {
      id: 3,
      title: "Elevate Your Vision",
      subtitle: "Where Ideas Come Alive",
      description: "Premium solutions tailored to your unique needs",
      bgGradient: "from-orange-500 via-red-600 to-pink-600",
      image: "/hero3.jfif"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full lg:h-[90vh] h-[300px] sm:h-[600px] overflow-hidden lg:bg-black container mx-auto rounded-3xl md:mt-5 mt-[-10%]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[100%] h-[100%] lg:w-[80%] lg:h-[80%] object-cover lg:object-contain rounded-3xl"
            />
          </div>
          <div className="relative h-full flex items-end lg:items-center justify-center px-4 sm:px-6 lg:px-8 pb-20 lg:pb-0">
            <div className="mx-auto text-center w-full">
              <div
                className={`transform transition-all duration-1000 delay-200 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-100'
                }`}
              >
                <div className="flex  flex-row gap-3 sm:gap-4 justify-center items-center">
                  <button className="w-[120px] sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl text-xs sm:text-base">
                    View Shop
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 z-10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 z-10 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 sm:w-12 h-2 sm:h-3 bg-white'
                : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;