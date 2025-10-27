'use client';

import React from 'react';
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

interface Product {
  id: number;
  name: string;
  category?: string;
  image?: string;
  totalOrder?: number;
  delivered?: number;
  status?: string;
}

interface Variant {
  id: number;
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
  return (
    <div className="flex flex-col gap-4">
      {/* Add Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-900">
          {type === 'product' ? 'Products' : 'Variants'}
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
          className="!bg-indigo-600 !text-white !normal-case"
        >
          {type === 'product' ? 'Add Product' : 'Add Variant'}
        </Button>
      </div>

      <TableContainer
        component={Paper}
        className="shadow-sm rounded-lg max-h-[calc(100vh-300px)] overflow-y-auto"
      >
        <Table stickyHeader>
          <TableHead>
            {type === 'product' ? (
              <TableRow className="bg-slate-50 border-b border-slate-200">
                <TableCell className="font-semibold text-slate-700 px-6 py-4" width="60">
                  No.
                </TableCell>
                <TableCell className="font-semibold text-slate-700 px-6 py-4">
                  Product
                </TableCell>
                <TableCell className="font-semibold text-slate-700 px-6 py-4">
                  Category
                </TableCell>
                <TableCell
                  className="font-semibold text-slate-700 px-6 py-4 text-center"
                  align="center"
                >
                  Total Order
                </TableCell>
                <TableCell
                  className="font-semibold text-slate-700 px-6 py-4 text-center"
                  align="center"
                >
                  Delivered
                </TableCell>
                <TableCell
                  className="font-semibold text-slate-700 px-6 py-4 text-center"
                  align="center"
                >
                  Status
                </TableCell>
                <TableCell
                  className="font-semibold text-slate-700 px-6 py-4 text-center"
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            ) : (
              <TableRow className="bg-slate-50 border-b border-slate-200">
                <TableCell className="font-semibold text-slate-700 px-6 py-4">
                  Variant Name
                </TableCell>
                <TableCell className="font-semibold text-slate-700 px-6 py-4">
                  Description
                </TableCell>
                <TableCell className="font-semibold text-slate-700 px-6 py-4 text-center">
                  Price
                </TableCell>
                <TableCell className="font-semibold text-slate-700 px-6 py-4 text-center">
                  Color
                </TableCell>
                <TableCell className="font-semibold text-slate-700 px-6 py-4 text-center">
                  Material
                </TableCell>
                <TableCell
                  className="font-semibold text-slate-700 px-6 py-4 text-center"
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            )}
          </TableHead>

          <TableBody>
            {data.map((item: any, index: number) =>
              type === 'product' ? (
                <TableRow
                  key={item.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <TableCell className="px-6 py-4 text-slate-600 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-slate-900 font-medium">{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-slate-600">
                    {item.category}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    {item.totalOrder}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    {item.delivered}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === 'Available'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell align="center" className="px-6 py-4 flex justify-center gap-3">
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
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow
                  key={item.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <TableCell className="px-6 py-4 text-slate-900 font-medium">
                    {item.name}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-slate-600">
                    {item.description}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    ${item.price}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">{item.color}</TableCell>
                  <TableCell className="px-6 py-4 text-center">{item.material}</TableCell>
                  <TableCell align="center" className="px-6 py-4 flex justify-center gap-3">
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
