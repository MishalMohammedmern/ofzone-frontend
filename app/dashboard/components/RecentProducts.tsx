import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$120",
    status: "In Stock",
    statusColor: "green",
    image: "/products/watch.jpg",
  },
  // Add more products...
];

export default function RecentProducts() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Products</h2>
        <Badge variant="outline">View All</Badge>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Product</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">{product.price}</td>
                <td className="px-4 py-4">
                  <Badge
                    variant="secondary"
                    className={`bg-${product.statusColor}-50 text-${product.statusColor}-700`}
                  >
                    {product.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}