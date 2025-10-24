export default function SummaryCards() {
  const stats = [
    { title: "Active Products", value: 42 },
    { title: "Running Offers", value: 6 },
    { title: "Profile Completion", value: "85%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 text-center hover:shadow-md transition"
        >
          <p className="text-gray-500">{stat.title}</p>
          <h2 className="text-2xl font-bold mt-2 text-gray-800">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
