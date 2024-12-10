import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './addmenuitems.css';

function AddMenuItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const menuItem = {
      menuId: id,
      name,
      description,
      price: parseFloat(price),
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/menu/createMenuItem`, menuItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || 201) {
        setMessage('Menu item added successfully');
        navigate('/createmenu');
      } else {
        setMessage(`Error: ${response.data.message}`);
      }
    } catch (error) {
      setMessage('Error creating menu item');
    }
  };

  return (
    <div className="add-menu-item-container">
      <h2 className="add-menu-item-header">Add Menu Item</h2>
      <form className="add-menu-item-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Menu Item</button>
      </form>
      {message && <p className={`add-menu-item-message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}
    </div>
  );
}

export default AddMenuItem;
