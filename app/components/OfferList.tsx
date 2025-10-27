import React from 'react'

 type OfferListProps = {
    heading?: string;
};

const OfferList = ({heading}:OfferListProps) => {
   
  const offers = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
      title: "Lamour Botiqe",
      description: "Lorem Ipsam Lorem Ipsam",
      discount: "₹45% OFF",
      bgColor: "bg-white"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      title: "Arabian Cafe",
      description: "Lorem Ipsam Lorem Ipsam",
      discount: "₹500 OFF",
      bgColor: "bg-white"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=400&h=300&fit=crop",
      title: "Bismi Supermarket",
      description: "Lorem Ipsam Lorem Ipsam",
      discount: "₹25% OFF",
      bgColor: "bg-white"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=400&h=300&fit=crop",
      title: "Bismi Supermarket",
      description: "Lorem Ipsam Lorem Ipsam",
      discount: "₹25% OFF",
      bgColor: "bg-white"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=400&h=300&fit=crop",
      title: "Bismi Supermarket",
      description: "Lorem Ipsam Lorem Ipsam",
      discount: "₹25% OFF",
      bgColor: "bg-white"
    }
  ]

  return (
    <div className="">
      <div className="bg-red-700 w-fit rounded-3xl flex justify-center py-2 sm:px-6 px-2 mb-6">
        <h3 className="text-white sm:text-lg  font-semibold">{heading}</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-2">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="sm:p-4 p-2">
              <div className="w-full sm:h-52 h-[150px] rounded-2xl overflow-hidden sm:mb-4">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="sm:text-xl text-[16px] font-bold text-gray-900 sm:mb-2">
                {offer.title}
              </h3>
              
              <p className="text-gray-600 sm:text-sm text-[14px] sm:mb-4">
                {offer.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="sm:text-xl font-bold text-gray-900">
                  {offer.discount}
                </span>
                <button className="sm:w-10 sm:h-10 p-1 bg-red-700 hover:bg-red-800 rounded-lg flex items-center justify-center transition-colors">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfferList