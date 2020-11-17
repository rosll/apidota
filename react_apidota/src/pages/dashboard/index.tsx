import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import Header from '../../components/Header';

interface Hero {
  id: number;
  localized_name: string;
  attack_type: string;
  roles: string[];
  legs: string;
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
      <div className="hero-list">
        {heroes.map(hero => (
          <article key={hero.id}>
            <strong id="name">{hero.localized_name}</strong>
            <p>
              Tipo de Ataque:&nbsp;
              {hero.attack_type}
            </p>
            <p>
              Funções:&nbsp;
              {hero.roles.join(', ')}
            </p>
            <p>
              Quantidade de pernas:&nbsp;
              {hero.legs}
            </p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
