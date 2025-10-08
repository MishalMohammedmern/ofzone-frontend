import React from 'react';
import { ChevronDown } from 'lucide-react';

const ShopByBrands = () => {
  const brands = [
    {
      id: 1,
      name: "Arabian Majus",
      logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Arabian Majus",
      logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Arabian Majus",
      logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Arabian Majus",
      logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Arabian Majus",
      logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with dropdown */}
        <div className="flex items-center gap-3 mb-8">
          <button className="bg-gradient-to-r from-red-800 to-red-900 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            Shop By Brands
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-800 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-center">
                <div className="relative w-28 h-28">
                  {/* Circular decorative border */}
                  <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full group-hover:border-red-800 transition-colors duration-300"></div>
                  
                  {/* Logo container */}
                  <div className="absolute inset-2 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-lg leading-tight">
                        ARABIAN
                      </div>
                      <div className="font-bold text-gray-900 text-lg leading-tight">
                        MAJUS
                      </div>
                    </div>
                  </div>

                  {/* Corner text decorations */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium">
                    LUXURY ITEMS
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium">
                    ESTABLISHED
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;