import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import Header from '../../components/Header';

interface Hero {
  id: number;
  localized_name: string;
}

const Dashboard: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    api.get('heroes').then(response => {
      setHeroes(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <form className="form-zone">
        <input placeholder="" />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
      <div className="hero-list">
        {heroes.map(hero => (
          <article key={hero.id}>
            <strong>{hero.localized_name}</strong>
            <Link to={`/details/${hero.id}`}>Detalhes</Link>
          </article>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
