import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  onClose: () => void;
  onNext: () => void;
}

const AddVariant: React.FC<Props> = ({ onClose, onNext }) => {
  const [form, setForm] = useState({
    color: '',
    size: '',
    material: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Variant Data:', form);
    onNext(); // Go to offer
  };

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Color" name="color" value={form.color} onChange={handleChange} fullWidth />
      <TextField label="Size" name="size" value={form.size} onChange={handleChange} fullWidth />
      <TextField label="Material" name="material" value={form.material} onChange={handleChange} fullWidth />
      <TextField label="Quantity" name="quantity" value={form.quantity} onChange={handleChange} fullWidth />
      <TextField label="Price" name="price" value={form.price} onChange={handleChange} fullWidth />
      <div className="flex justify-end gap-3 mt-4">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default AddVariant;
