'use client';

import React, { useEffect, useState } from 'react';
import { ProductTable } from '@/app/components/dashboard/Table';
import PaginationControls from '@/app/components/dashboard/PaginationControls';
import { Button } from '@/components/ui/button';
import { Product, Variant } from '@/lib/type';



export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [variants, setVariants] = useState<Variant[]>([]);
    const [viewVariant, setViewVariant] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<"product" | "variant">("product");


    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const dummyProducts: Product[] = [
            { id: "1", name: "iPhone 16 Pro", category: "Electronics", subcategory: "Smartphones", description: "Latest model", variantCount: 3 },
            { id: "2", name: "MacBook Air M3", category: "Computers", subcategory: "Laptops", description: "Lightweight laptop", variantCount: 2 },
            { id: "3", name: "AirPods Pro 2", category: "Accessories", subcategory: "Audio", description: "Noise cancellation", variantCount: 4 },
            { id: "4", name: "Apple Watch 10", category: "Wearable", subcategory: "Smartwatches", description: "Health tracking", variantCount: 3 },
            { id: "5", name: "iPad Pro 13", category: "Tablet", subcategory: "iPads", description: "M4 chip", variantCount: 2 },
            { id: "6", name: "Vision Pro", category: "VR", subcategory: "Headsets", description: "Spatial computing", variantCount: 1 },
            { id: "7", name: "iPhone 16 Pro 2", category: "Electronics", subcategory: "Smartphones", description: "Latest model", variantCount: 3 },
            { id: "8", name: "MacBook Air M3 2", category: "Computers", subcategory: "Laptops", description: "Lightweight laptop", variantCount: 2 },
            { id: "9", name: "AirPods Pro 2 2", category: "Accessories", subcategory: "Audio", description: "Noise cancellation", variantCount: 4 },
            { id: "10", name: "Apple Watch 10 2", category: "Wearable", subcategory: "Smartwatches", description: "Health tracking", variantCount: 3 },
            { id: "11", name: "iPad Pro 13 2", category: "Tablet", subcategory: "iPads", description: "M4 chip", variantCount: 2 },
            { id: "12", name: "Vision Pro 2", category: "VR", subcategory: "Headsets", description: "Spatial computing", variantCount: 1 },
            { id: "13", name: "iPhone 16 Pro 3", category: "Electronics", subcategory: "Smartphones", description: "Latest model", variantCount: 3 },
            { id: "14", name: "MacBook Air M3 3", category: "Computers", subcategory: "Laptops", description: "Lightweight laptop", variantCount: 2 },
            { id: "15", name: "AirPods Pro 2 3", category: "Accessories", subcategory: "Audio", description: "Noise cancellation", variantCount: 4 },
            { id: "16", name: "Apple Watch 10 3", category: "Wearable", subcategory: "Smartwatches", description: "Health tracking", variantCount: 3 },
            { id: "17", name: "iPad Pro 13 3", category: "Tablet", subcategory: "iPads", description: "M4 chip", variantCount: 2 },
            { id: "18", name: "Vision Pro 3", category: "VR", subcategory: "Headsets", description: "Spatial computing", variantCount: 1 },
        ];


        setProducts(dummyProducts);
    }, []);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handleViewVariants = (product: Product) => {
        setViewVariant(product.id);
        setViewMode("variant"); // <-- switch mode
        setVariants([
            { id: "v1", name: "Black 128GB", description: "Mid range", price: 1200, color: "Black", material: "Aluminum" },
            { id: "v2", name: "Silver 256GB", description: "High-end", price: 1400, color: "Silver", material: "Aluminum" },
        ]);
    };


    return (
        <div className="h-[87vh] px-5 overflow-hidden flex flex-col bg-gray-100 py-4 rounded-lg shadow-md">
            <div className="mx-auto flex flex-col gap-3 w-full h-full">


                <div className="flex-1 overflow-hidden">
                    {viewMode === 'product' ? (
                        <ProductTable
                            data={paginatedProducts} // <-- only current page items
                            type="product"
                            onAdd={() => alert('Add Product')}
                            onEdit={(p) => alert(`Edit Product: ${p.name}`)}
                            onDelete={(p) => alert(`Delete Product: ${p.name}`)}
                            onViewVariant={handleViewVariants}
                        />


                    ) : (
                        <ProductTable
                            data={variants} // <-- use state
                            type="variant"
                            onAdd={() => alert('Add Variant')}
                            onEdit={(v) => alert(`Edit Variant: ${v.name}`)}
                            onDelete={(v) => alert(`Delete Variant: ${v.name}`)}
                        />
                    )}
                </div>
            </div>
            {!viewVariant && (
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />

            )}

            {/* Add Variant Button */}
            {viewVariant && (
                <div className="flex justify-end mt-6">
                    <Button>Add Variant</Button>
                </div>
            )}
        </div>
    );
}
