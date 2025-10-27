import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "20% Off Electronics",
    product: "Wireless Headphones",
    hoursLeft: 23,
    status: "ending",
  },
  // Add more offers...
];

export default function EndingOffers() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Ending Tomorrow</h2>
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
            <div className="flex items-center gap-2 text-orange-500">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{offer.hoursLeft}h left</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}