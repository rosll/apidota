import React from 'react';
import './style.css';
import logo from '../../assets/logo_img.jpg';

const Header: React.FC = () => {
  return (
    <header id="main-header">
      <img src={logo} alt="Logo" />
      Listando Personagens
    </header>
  );
};

export default Header;
