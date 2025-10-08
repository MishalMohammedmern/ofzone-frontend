import React from 'react';

const CTABanner = () => {
  return (
    <div className="w-full py-12 ">
      <div className=" mx-auto">
        <div className="relative bg-gradient-to-b from-gray-900 via-black to-black rounded-3xl overflow-hidden shadow-2xl">
          {/* Radial gradient overlay for vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60"></div>
          
          {/* Top fade effect */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-gray-200 to-transparent opacity-80"></div>
          
          {/* Bottom fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-gray-200 to-transparent opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to transform your data?
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of data-driven professionals who are creating beautiful visualizations in minutes.
            </p>
            
            <button className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;