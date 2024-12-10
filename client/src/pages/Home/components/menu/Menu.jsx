import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './menu.css';
import mbg from '../../../../assets/mbg.png';

function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/menu/getAllMenus`);
        setItems(response.data);
      } catch (err) {
        setError('Failed to fetch items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div style={{height: 'max-content'}}>
      <img className="mbg" src={mbg} alt="" />
      <div className="menu-div">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          items.map((item, index) => (
            <div
              onClick={() => navigate(`/menu/${item._id}`)}
              key={index}
              className="menu-card"
            >
              {item.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;
