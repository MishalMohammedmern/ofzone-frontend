import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  onClose: () => void;
  onNext: () => void;
}

const AddProduct: React.FC<Props> = ({ onClose, onNext }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subcategory: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Product Data:', form);
    onNext(); 
  };

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth />
      <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth />
      <TextField label="Price" name="price" value={form.price} onChange={handleChange} fullWidth />
      <div className="flex justify-end gap-3 mt-4">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default AddProduct;
