'use client';

import React, { useEffect, useState } from 'react';
import { ProductTable } from '@/app/components/dashboard/Table';
import PaginationControls from '@/app/components/dashboard/PaginationControls';
import { Variant } from '@/lib/type';
import { usePagination } from '@/hooks/usePagination';

export default function VariantListPage() {
  const [variants, setVariants] = useState<Variant[]>([]);

  useEffect(() => {
    const mockVariants: Variant[] = [
      { id: 'v1', name: 'Black 128GB', description: 'Mid range', price: 1200, color: 'Black', material: 'Aluminum' },
      { id: 'v2', name: 'Silver 256GB', description: 'High-end', price: 1400, color: 'Silver', material: 'Aluminum' },
      { id: 'v3', name: 'Blue 512GB', description: 'Premium', price: 1600, color: 'Blue', material: 'Steel' },
      { id: 'v4', name: 'Red 64GB', description: 'Budget', price: 900, color: 'Red', material: 'Plastic' },
    ];
    setVariants(mockVariants);
  }, []);

  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(variants, 2);

  return (
    <div className="h-[87vh] px-5 overflow-hidden flex flex-col bg-gray-100 py-4 rounded-lg shadow-md">
      <div className="mx-auto flex flex-col gap-3 w-full h-full">
        <div className="flex-1 overflow-hidden">
          <ProductTable
            data={paginatedData} // ✅ paginated data
            type="variant"
            onAdd={() => alert('Add Variant')}
            onEdit={(v) => alert(`Edit Variant: ${v.name}`)}
            onDelete={(v) => alert(`Delete Variant: ${v.name}`)}
            buttonLabel="Add Variant"
            buttonType="variant"
          />
        </div>
      </div>

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

    
    </div>
  );
}
