'use client';

import React, { useEffect, useState } from 'react';
import { ProductTable } from '@/app/components/dashboard/Table';
import PaginationControls from '@/app/components/dashboard/PaginationControls';
import { Product } from '@/lib/type';
import { usePagination } from '@/hooks/usePagination';



export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);





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


      const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(products, 10);

  
 


    return (
        <div className="h-[87vh] px-5 overflow-hidden flex flex-col bg-gray-100 py-4 rounded-lg shadow-md">
            <div className="mx-auto flex flex-col gap-3 w-full h-full">


                <div className="flex-1 overflow-hidden">
                        <ProductTable
                            data={paginatedData} // <-- only current page items
                            type="product"
                            onAdd={() => alert('Add Product')}
                            onEdit={(p) => alert(`Edit Product: ${p.name}`)}
                            onDelete={(p) => alert(`Delete Product: ${p.name}`)}
                        />

                </div>
            </div>
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />

         

          
        </div>
    );
}
