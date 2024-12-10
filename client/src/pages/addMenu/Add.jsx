import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add.css'

function Add() {
  const [menus, setMenus] = useState([]);
  const [newMenuName, setNewMenuName] = useState('');
  const [newMenuDescription, setNewMenuDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/menu/getAllMenus`);
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };
    
    fetchMenus();
  }, []);

  const handleAddMenu = async () => {
    if (newMenuName.trim()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/menu/createMenu`, { 
          name: newMenuName, 
          description: newMenuDescription 
        });
        setMenus([...menus, response.data]);
        setNewMenuName('');
        setNewMenuDescription('');
      } catch (error) {
        console.error('Error adding menu:', error);
      }
    }
  };

  const handleMenuClick = (menuId) => {
    navigate(`/createmenuitem/${menuId}`);
  };

  return (
    <div className='add-div-main'>
      <div className='head-text'>
        <h1>Add Menu</h1>
      </div>
    
      <div className='add-menu'>
          
          <input 
            type="text" 
            value={newMenuName} 
            onChange={(e) => setNewMenuName(e.target.value)} 
            placeholder="Enter menu name" 
          />
          <input 
            type="text" 
            value={newMenuDescription} 
            onChange={(e) => setNewMenuDescription(e.target.value)} 
            placeholder="Enter menu description" 
          />
          <button onClick={handleAddMenu}>Create New Menu</button>
     </div>

      <div>
        <div className='head-text'>
          <h2>Existing Menus</h2>
        </div>
        {menus.length > 0 ? (
          <ul className='exisiting-menus-ul'>
           
            {menus.map((menu) => (
              <li  className='existing-menus-card' key={menu._id}  onClick={() => handleMenuClick(menu._id)}> {menu.name}
                <p className='menu-des'>{menu.description}</p>
              </li>
            ))}
           
          </ul>
        ) : (
          <p>No menus available</p>
        )}
      </div>
    </div>
  );
}

export default Add;
