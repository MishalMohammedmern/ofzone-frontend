import React from 'react';

const RunningOffers = () => {
  const offers = [
    { id: 1, percentage: '25%' },
    { id: 2, percentage: '50%' },
    { id: 3, percentage: '75%' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="relative">
            

              {/* Card */}
              <div className="relative bg-gradient-to-br from-red-800 to-red-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-700 rounded-full opacity-20 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-700 rounded-full opacity-20 -ml-12 -mb-12"></div>
                
                <div className="relative z-10 text-center py-8">
                  <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
                    {offer.percentage}
                  </h2>
                  <p className="text-xl text-white font-medium">
                    Running Offers
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningOffers;