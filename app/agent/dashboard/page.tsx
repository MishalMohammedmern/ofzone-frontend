"use client";
import CurrentOffers from "./components/CurrentOffers";
import ProductList from "./components/ProductList";
import SummaryCards from "./components/SummaryCards";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 ">
                <SummaryCards />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="text-md font-semibold text-slate-900 mb-3">Current Offers</h3>
                        <CurrentOffers />
                    </div>
                    <ProductList />

                </div>


            </div>
        </div>
    );
}
