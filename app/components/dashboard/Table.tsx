'use client';
import React, { useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { Pencil, Trash2, Eye } from 'lucide-react';
import FilterBar from './FilterComponent';

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  variantCount?: number;
  image?: string;
}

interface ProductTableProps {
  data: Product[];
  onEdit?: (item: Product) => void;
  onDelete?: (item: Product) => void;
  onViewVariant?: (item: Product) => void;
  onAdd?: () => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  data,
  onEdit,
  onDelete,
  onViewVariant,
  onAdd,
}) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sort, setSort] = useState('name');

  const categories = Array.from(new Set(data.map((item) => item.category)));
  const subcategories = Array.from(new Set(data.map((item) => item.subcategory)));

  const filteredData = useMemo(() => {
    let result = [...data];

    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      result = result.filter((item) => item.category === category);
    }

    if (subcategory) {
      result = result.filter((item) => item.subcategory === subcategory);
    }

    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'category') result.sort((a, b) => a.category.localeCompare(b.category));
    if (sort === 'variantCount') result.sort((a, b) => (b.variantCount || 0) - (a.variantCount || 0));

    return result;
  }, [data, search, category, subcategory, sort]);

  return (
    <div className="flex flex-col gap-6">
        <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        subcategory={subcategory}
        setSubcategory={setSubcategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
        subcategories={subcategories}
        onClear={() => {
          setSearch('');
          setCategory('');
          setSubcategory('');
          setSort('name');
        }}
      />


      <TableContainer
        component={Paper}
        sx={{
          borderRadius: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          maxHeight: 'calc(100vh - 300px)',
          overflow: 'auto',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#0B1325' }}>
              {['No.', 'Product', 'Category', 'Subcategory', 'Variants', 'Actions'].map(
                (header, idx) => (
                  <TableCell
                    key={idx}
                    align={idx > 0 ? 'center' : 'left'}
                    sx={{
                      backgroundColor: '#0B1325',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      padding: '0.75rem 1.5rem',
                    }}
                  >
                    {header}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-50 transition-all border-b border-gray-100"
              >
                <TableCell align="left" className="text-gray-600 px-6 py-3">
                  {String(index + 1).padStart(2, '0')}
                </TableCell>
                <TableCell align="center" className="px-6 py-3 text-gray-900 font-medium">
                  <div className="flex items-center justify-center gap-3">
                    {item.image && (
                      <div className="relative w-10 h-10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain rounded-md"
                        />
                      </div>
                    )}
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell align="center" className="text-gray-600 px-6 py-3">
                  {item.category}
                </TableCell>
                <TableCell align="center" className="text-gray-600 px-6 py-3">
                  {item.subcategory}
                </TableCell>
                <TableCell align="center" className="text-gray-600 px-6 py-3">
                  {item.variantCount}
                </TableCell>
                <TableCell align="center" className="px-6 py-3">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => onEdit?.(item)}
                      className="p-1.5 rounded-md hover:bg-blue-50 text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => onDelete?.(item)}
                      className="p-1.5 rounded-md hover:bg-red-50 text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button
                      onClick={() => onViewVariant?.(item)}
                      className="p-1.5 rounded-md hover:bg-amber-50 text-amber-600"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
