import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './global/style.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
