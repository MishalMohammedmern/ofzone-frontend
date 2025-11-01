'use client';
import React, { useState } from 'react';
import { TextField, MenuItem, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Filter, X } from 'lucide-react';
import AddProduct from './AddProduct';
import AddVariant from './AddVariant';
import AddOffer from './AddOffer';


interface FilterBarProps {
    search: string;
    setSearch: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    subcategory: string;
    setSubcategory: (value: string) => void;
    sort: string;
    setSort: (value: string) => void;
    categories: string[];
    subcategories: string[];
    onClear: () => void;
    buttonLabel?: string;
    buttonType?: 'product' | 'variant' | 'offer';
}

const FilterBar: React.FC<FilterBarProps> = ({
    search,
    setSearch,
    category,
    setCategory,
    subcategory,
    setSubcategory,
    sort,
    setSort,
    categories,
    subcategories,
    onClear,
    buttonLabel,
    buttonType,
}) => {
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState<'product' | 'variant' | 'offer' | null>(null);

    const handleOpen = (type: 'product' | 'variant' | 'offer') => {
        setModalType(type);
        setOpen(true);
        
    };

    const handleClose = () => {  
        setOpen(false);
        setModalType(null);
    };

    return (
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl shadow-sm">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
                <TextField
                    size="small"
                    placeholder="Search product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[300px] bg-white rounded-4xl"
                    sx={{ borderRadius: "40px" }}
                />
                <TextField
                    select
                    size="small"
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-[260px]"
                >
                    <MenuItem value="">All</MenuItem>
                    {categories.map((cat, i) => (
                        <MenuItem key={i} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    size="small"
                    label="Subcategory"
                    value={subcategory}
                    onChange={(e) => setSubcategory(e.target.value)}
                    className="w-[260px]"
                >
                    <MenuItem value="">All</MenuItem>
                    {subcategories.map((sub, i) => (
                        <MenuItem key={i} value={sub}>
                            {sub}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    size="small"
                    label="Sort by"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-[250px]"
                >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="category">Category</MenuItem>
                    <MenuItem value="variantCount">Variants</MenuItem>
                </TextField>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Filter size={16} />}
                    className="!bg-indigo-600 !text-white !rounded-xl"
                >
                    Refresh
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    className="bg-red-500 !text-white !normal-case !rounded-xl !px-6"
                    onClick={() => handleOpen(buttonType || 'product')}
                    title={buttonType}
                >
                    {buttonLabel || 'Add Product'}
                </Button>
            </div>

            {/* Modal */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle className="flex justify-between items-center">
                    {modalType === 'product' && 'Add New Product'}
                    {modalType === 'variant' && 'Add Product Variant'}
                    {modalType === 'offer' && 'Add Offer'}
                    <IconButton onClick={handleClose}>
                        <X />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {modalType === 'product' && <AddProduct onClose={handleClose} onNext={() => handleOpen('variant')} />}
                    {modalType === 'variant' && <AddVariant onClose={handleClose} onNext={() => handleOpen('offer')} />}
                    {modalType === 'offer' && <AddOffer onClose={handleClose} />}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default FilterBar;
