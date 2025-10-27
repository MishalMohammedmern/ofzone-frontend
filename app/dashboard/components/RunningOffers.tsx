import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const offers = [
  {
    id: 1,
    title: "Buy One Get One Free",
    product: "Smart Watch",
    endDate: "2023-10-26",
    status: "active",
    progress: 45,
  },
  // Add more offers...
];

export default function RunningOffers() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Running Offers</h2>
        <Badge variant="outline">View All</Badge>
      </div>

      <div className="space-y-4">
        {offers.slice(0, 5).map((offer) => (
          <div
            key={offer.id}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
          >
            <div>
              <h3 className="font-medium">{offer.title}</h3>
              <p className="text-sm text-gray-500">{offer.product}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Ends in</p>
                <p className="font-medium">{offer.endDate}</p>
              </div>
              <div className="h-2 w-24 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-purple-600"
                  style={{ width: `${offer.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}