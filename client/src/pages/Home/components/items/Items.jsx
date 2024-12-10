import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './items.css';
import fls from "../../../../assets/Fls.png";
import frs from "../../../../assets/Frs.png";


function Items() {
  const { id } = useParams() ;
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  if (!id) {
    return <div className='select-menu-message'>Select a menu to view items</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/menu/getMenuItems/${id}`);
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div className='error-text'>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='menu-container'>
      <div className='menu-bg-img'>
      </div>

      <div className='menu-content'>
        <div className='menu-content-div'>
          <div style={{ display: 'flex', justifyContent: 'center' }}> <h1>MENU</h1></div>
          <div className='menu-items'>
            {data.map((item) => (
              <div key={item._id} className='item-overlay'>
                <div className='item-name'>
                  <a>{item.name}</a>
                  <div className="dot-separator"></div>
                  <a>${item.price}</a>
                </div>
                <div className='item-description'>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
