'use client';

import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import Image from 'next/image';
import { Pencil, Trash2, Eye, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category?: string;
  subcategory?: string;
  variantCount?: number;
  image?: string;
}

interface Variant {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  material: string;
}

interface ProductTableProps {
  data: (Product | Variant)[];
  type: 'product' | 'variant';
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  onViewVariant?: (item: Product) => void;
  onAdd?: () => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  data,
  type,
  onEdit,
  onDelete,
  onViewVariant,
  onAdd,
}) => {
  // Local search, filter, sort state
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState('all');
  const [materialFilter, setMaterialFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');

  // Extract dynamic filters
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        (data as Product[])
          .map((p) => p.category)
          .filter((c): c is string => !!c)
      )
    );
  }, [data]);

  const subcategories = useMemo(() => {
    return Array.from(
      new Set(
        (data as Product[])
          .map((p) => p.subcategory)
          .filter((s): s is string => !!s)
      )
    );
  }, [data]);

  const materials = useMemo(() => {
    return Array.from(
      new Set(
        (data as Variant[])
          .map((v) => v.material)
          .filter((m): m is string => !!m)
      )
    );
  }, [data]);

  // Filter + Sort Logic
  const filteredData = useMemo(() => {
    let result = [...data];

    if (searchQuery) {
      result = result.filter((item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (type === 'product') {
      if (categoryFilter !== 'all') {
        result = (result as Product[]).filter(
          (item) => item.category === categoryFilter
        );
      }
      if (subcategoryFilter !== 'all') {
        result = (result as Product[]).filter(
          (item) => item.subcategory === subcategoryFilter
        );
      }
    } else {
      if (materialFilter !== 'all') {
        result = (result as Variant[]).filter(
          (item) => item.material === materialFilter
        );
      }
    }

    result.sort((a: any, b: any) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'variants-asc':
          return (a.variantCount || 0) - (b.variantCount || 0);
        case 'variants-desc':
          return (b.variantCount || 0) - (a.variantCount || 0);
        case 'price-asc':
          return (a.price || 0) - (b.price || 0);
        case 'price-desc':
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

    return result;
  }, [data, searchQuery, categoryFilter, subcategoryFilter, materialFilter, sortBy, type]);

  return (
    <div className="flex flex-col gap-5">
      {/* Header + Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-gray-800">
          {type === 'product' ? 'Products' : 'Variants'}
        </h2>
        <div className="flex flex-wrap gap-3 items-center">
          <TextField
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {type === 'product' && (
            <>
              <TextField
                select
                size="small"
                label="Category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                size="small"
                label="Subcategory"
                value={subcategoryFilter}
                onChange={(e) => setSubcategoryFilter(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                {subcategories.map((sub) => (
                  <MenuItem key={sub} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
          {type === 'variant' && (
            <TextField
              select
              size="small"
              label="Material"
              value={materialFilter}
              onChange={(e) => setMaterialFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              {materials.map((mat) => (
                <MenuItem key={mat} value={mat}>
                  {mat}
                </MenuItem>
              ))}
            </TextField>
          )}
          <TextField
            select
            size="small"
            label="Sort By"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="name-asc">Name (A-Z)</MenuItem>
            <MenuItem value="name-desc">Name (Z-A)</MenuItem>
            {type === 'product' && (
              <>
                <MenuItem value="variants-asc">Variants (Low)</MenuItem>
                <MenuItem value="variants-desc">Variants (High)</MenuItem>
              </>
            )}
            {type === 'variant' && (
              <>
                <MenuItem value="price-asc">Price (Low)</MenuItem>
                <MenuItem value="price-desc">Price (High)</MenuItem>
              </>
            )}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={onAdd}
            className="!bg-indigo-600 !text-white !normal-case !rounded-xl !px-6"
          >
            {type === 'product' ? 'Add Product' : 'Add Variant'}
          </Button>
        </div>
      </div>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          maxHeight: 'calc(100vh - 270px)',
          overflow: 'auto',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            {type === 'product' ? (
              <TableRow sx={{ backgroundColor: '#0B1325' }}>
                {['No.', 'Product', 'Category', 'Sub Category', 'Variants', 'Actions'].map(
                  (header, idx) => (
                    <TableCell
                      key={idx}
                      align={idx > 0 ? 'center' : 'left'}
                      sx={{
                        backgroundColor: '#0B1325',
                        color: '#FFFFFF',
                        fontWeight: 600,
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            ) : (
              <TableRow sx={{ backgroundColor: '#9CA3AF' }}>
                {['Variant', 'Description', 'Price', 'Color', 'Material', 'Actions'].map(
                  (header, idx) => (
                    <TableCell
                      key={idx}
                      align={idx > 0 ? 'center' : 'left'}
                      sx={{
                        backgroundColor: '#9CA3AF',
                        color: '#FFFFFF',
                        fontWeight: 600,
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            )}
          </TableHead>

          <TableBody>
            {filteredData.map((item: any, index: number) =>
              type === 'product' ? (
                <TableRow
                  key={item.id}
                  className="hover:bg-gray-50 transition-all border-b border-gray-100"
                >
                  <TableCell>{String(index + 1).padStart(2, '0')}</TableCell>
                  <TableCell align="center">
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
                  <TableCell align="center">{item.category}</TableCell>
                  <TableCell align="center">{item.subcategory}</TableCell>
                  <TableCell align="center">{item.variantCount}</TableCell>
                  <TableCell align="center">
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
              ) : (
                <TableRow key={item.id} className="hover:bg-gray-50 transition-all">
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center">{item.description}</TableCell>
                  <TableCell align="center">${item.price}</TableCell>
                  <TableCell align="center">{item.color}</TableCell>
                  <TableCell align="center">{item.material}</TableCell>
                  <TableCell align="center">
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
                    </div>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
