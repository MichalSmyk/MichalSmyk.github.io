import React from 'react';
import './footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const name = 'Michal Smyk';
  return (
    <footer className="footer">
      <p>&copy; {year} {name}</p>
    </footer>
  );
}

export default Footer;
