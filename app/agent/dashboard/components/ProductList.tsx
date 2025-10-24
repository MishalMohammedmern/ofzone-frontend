export default function ProductList() {
  const products = [
    { name: "Smart Watch", price: "$120", stock: "In Stock" },
    { name: "Wireless Headphones", price: "$80", stock: "Low Stock" },
    { name: "Bluetooth Speaker", price: "$45", stock: "Out of Stock" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Products</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-2">Product</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
              <td className="py-2">{p.name}</td>
              <td className="py-2">{p.price}</td>
              <td
                className={`py-2 ${
                  p.stock === "In Stock"
                    ? "text-green-600"
                    : p.stock === "Low Stock"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {p.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
