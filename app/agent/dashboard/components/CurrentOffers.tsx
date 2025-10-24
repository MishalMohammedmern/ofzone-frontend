export default function CurrentOffers() {
  const offers = [
    { title: "Buy 2 Get 1 Free", description: "Available till Oct 31", status: "Active" },
    { title: "20% Off Electronics", description: "Valid till Nov 5", status: "Active" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Offers</h3>
      <div className="space-y-3">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition"
          >
            <h4 className="font-medium text-gray-800">{offer.title}</h4>
            <p className="text-sm text-gray-500">{offer.description}</p>
            <span className="inline-block mt-2 text-xs text-green-600 font-semibold">
              {offer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
