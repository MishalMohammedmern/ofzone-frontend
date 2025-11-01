import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  onClose: () => void;
}

const AddOffer: React.FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    discountPrice: '',
    discountPercentage: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Offer Data:', form);
    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Title" name="title" value={form.title} onChange={handleChange} fullWidth />
      <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth />
      <TextField label="Discount Price" name="discountPrice" value={form.discountPrice} onChange={handleChange} fullWidth />
      <TextField label="Discount %" name="discountPercentage" value={form.discountPercentage} onChange={handleChange} fullWidth />
      <TextField type="date" label="Start Date" name="startDate" value={form.startDate} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
      <TextField type="date" label="End Date" name="endDate" value={form.endDate} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
      <div className="flex justify-end gap-3 mt-4">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default AddOffer;
