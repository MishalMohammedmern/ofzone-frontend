'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
} from '@mui/material';
import { Star } from 'lucide-react';
import { Product } from '@/lib/type';

interface ProductTableProps {
  products: Product[];
  onRowClick?: (product: Product) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onRowClick,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status: string) =>
    status === 'Available'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : 'bg-red-50 text-red-700 border-red-200';

  const getStatusLabel = (status: string) =>
    status === 'Available' ? 'Available' : 'Out of Stock';

  // Paginate products
  const paginatedProducts = products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper className="shadow-sm rounded-lg overflow-hidden">
      <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
        <Table stickyHeader>
          <TableHead>
            <TableRow className="bg-slate-50 border-b border-slate-200">
              <TableCell className="font-semibold text-slate-700 px-6 py-4" width="60">
                NO.
              </TableCell>
              <TableCell className="font-semibold text-slate-700 px-6 py-4">
                PRODUCT
              </TableCell>
              <TableCell className="font-semibold text-slate-700 px-6 py-4">
                CATEGORY
              </TableCell>
              <TableCell
                className="font-semibold text-slate-700 px-6 py-4 text-center"
                align="center"
              >
                TOTAL ORDER
              </TableCell>
              <TableCell
                className="font-semibold text-slate-700 px-6 py-4 text-center"
                align="center"
              >
                DELIVERED
              </TableCell>
              <TableCell
                className="font-semibold text-slate-700 px-6 py-4 text-center"
                align="center"
              >
                PENDING
              </TableCell>
              <TableCell className="font-semibold text-slate-700 px-6 py-4">
                STATUS
              </TableCell>
              <TableCell
                className="font-semibold text-slate-700 px-6 py-4 text-right"
                align="right"
              >
                PRICE
              </TableCell>
              <TableCell
                className="font-semibold text-slate-700 px-6 py-4 text-center"
                align="center"
              >
                RATING
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product, index) => (
              <TableRow
                key={`${product.id}-${index}`}
                onClick={() => onRowClick?.(product)}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <TableCell className="px-6 py-4 text-slate-600 font-medium">
                  {String(page * rowsPerPage + index + 1).padStart(2, '0')}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {product.image && (
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-slate-900 font-medium">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 text-slate-600">
                  {product.category}
                </TableCell>
                <TableCell
                  className="px-6 py-4 text-slate-600 text-center"
                  align="center"
                >
                  {product.totalOrder}
                </TableCell>
                <TableCell
                  className="px-6 py-4 text-slate-600 text-center"
                  align="center"
                >
                  {product.delivered}
                </TableCell>
                <TableCell
                  className="px-6 py-4 text-slate-600 text-center"
                  align="center"
                >
                  {product.pending}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Chip
                    label={getStatusLabel(product.status)}
                    size="small"
                    className={`${getStatusColor(product.status)} font-medium`}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell
                  className="px-6 py-4 text-slate-900 font-semibold text-right"
                  align="right"
                >
                  ${product.price}
                </TableCell>
                <TableCell
                  className="px-6 py-4 text-center flex items-center justify-center gap-1"
                  align="center"
                >
                  <span className="text-slate-900 font-medium">
                    {product.rating}
                  </span>
                  <Star
                    size={16}
                    className="fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TablePagination
        rowsPerPageOptions={[5, 8, 10, 20]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
