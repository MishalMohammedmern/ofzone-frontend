'use client';

import { ProductTable } from '@/app/components/dashboard/Table';
import { Product } from '@/lib/type';
import React from 'react';


const sampleProducts: Product[] = [
    {
        id: 1,
        name: 'Nike Air Force',
        category: 'Footwear',
        totalOrder: 2050,
        delivered: 2000,
        pending: 50,
        status: 'Out of Stock',
        price: 250,
        rating: 4.8,
        image: '/products/nike-air-force.jpg',
    },
    {
        id: 2,
        name: 'Nike React',
        category: 'Footwear',
        totalOrder: 1350,
        delivered: 1300,
        pending: 50,
        status: 'Available',
        price: 200,
        rating: 4.8,
        image: '/products/nike-react.jpg',
    },
    {
        id: 3,
        name: 'Apple Watch',
        category: 'Watch',
        totalOrder: 1200,
        delivered: 1180,
        pending: 20,
        status: 'Available',
        price: 399,
        rating: 4.5,
        image: '/products/apple-watch.jpg',
    },
    {
        id: 4,
        name: 'Puma RS-X',
        category: 'Footwear',
        totalOrder: 1000,
        delivered: 990,
        pending: 10,
        status: 'Out of Stock',
        price: 400,
        rating: 4.5,
        image: '/products/puma-rs-x.jpg',
    },
    {
        id: 5,
        name: 'Kindle',
        category: 'Electronics',
        totalOrder: 800,
        delivered: 775,
        pending: 25,
        status: 'Available',
        price: 140,
        rating: 4.5,
        image: '/products/kindle.jpg',
    },
    {
        id: 1,
        name: 'Nike Air Force',
        category: 'Footwear',
        totalOrder: 2050,
        delivered: 2000,
        pending: 50,
        status: 'Out of Stock',
        price: 250,
        rating: 4.8,
        image: '/products/nike-air-force.jpg',
    },
    {
        id: 2,
        name: 'Nike React',
        category: 'Footwear',
        totalOrder: 1350,
        delivered: 1300,
        pending: 50,
        status: 'Available',
        price: 200,
        rating: 4.8,
        image: '/products/nike-react.jpg',
    },
    {
        id: 3,
        name: 'Apple Watch',
        category: 'Watch',
        totalOrder: 1200,
        delivered: 1180,
        pending: 20,
        status: 'Available',
        price: 399,
        rating: 4.5,
        image: '/products/apple-watch.jpg',
    },
    {
        id: 4,
        name: 'Puma RS-X',
        category: 'Footwear',
        totalOrder: 1000,
        delivered: 990,
        pending: 10,
        status: 'Out of Stock',
        price: 400,
        rating: 4.5,
        image: '/products/puma-rs-x.jpg',
    },
    {
        id: 5,
        name: 'Kindle',
        category: 'Electronics',
        totalOrder: 800,
        delivered: 775,
        pending: 25,
        status: 'Available',
        price: 140,
        rating: 4.5,
        image: '/products/kindle.jpg',
    },
    {
        id: 1,
        name: 'Nike Air Force',
        category: 'Footwear',
        totalOrder: 2050,
        delivered: 2000,
        pending: 50,
        status: 'Out of Stock',
        price: 250,
        rating: 4.8,
        image: '/products/nike-air-force.jpg',
    },
    {
        id: 2,
        name: 'Nike React',
        category: 'Footwear',
        totalOrder: 1350,
        delivered: 1300,
        pending: 50,
        status: 'Available',
        price: 200,
        rating: 4.8,
        image: '/products/nike-react.jpg',
    },
    {
        id: 3,
        name: 'Apple Watch',
        category: 'Watch',
        totalOrder: 1200,
        delivered: 1180,
        pending: 20,
        status: 'Available',
        price: 399,
        rating: 4.5,
        image: '/products/apple-watch.jpg',
    },
    {
        id: 4,
        name: 'Puma RS-X',
        category: 'Footwear',
        totalOrder: 1000,
        delivered: 990,
        pending: 10,
        status: 'Out of Stock',
        price: 400,
        rating: 4.5,
        image: '/products/puma-rs-x.jpg',
    },
    {
        id: 5,
        name: 'Kindle',
        category: 'Electronics',
        totalOrder: 800,
        delivered: 775,
        pending: 25,
        status: 'Available',
        price: 140,
        rating: 4.5,
        image: '/products/kindle.jpg',
    },
];



export function ProductListPage() {
  const handleRowClick = (product: Product) => {
    console.log('Selected product:', product);
  };

  return (
    <div className="h-screen px-5 overflow-hidden flex flex-col">
      <div className="mx-auto flex flex-col gap-3 w-full h-full">
        <div className="">
          <h1 className="text-3xl font-bold text-slate-900">Product List</h1>
          <p className="text-slate-600">
            Manage and view all your products in one place
          </p>
        </div>
        <div className="flex-1 overflow-hidden">
          <ProductTable products={sampleProducts} onRowClick={handleRowClick} />
        </div>
      </div>
    </div>
  );
}
