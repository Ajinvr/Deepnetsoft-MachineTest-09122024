import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section">
          <h4>CONNECT WITH US</h4>
          <p>+91 9567843340</p>
          <p>info@deepnetsoft.com</p>
        </div>
        
        <div className="footer-logo">
          <h2><a style={{color:"#0796EF"}}>DEEP</a> NET <a style={{color:"grey"}}>SOFT</a></h2>
        </div>
        
        <div className="footer-section">
          <h4>FIND US</h4>
          <p>First floor, Geo infopark,<br />
          Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
