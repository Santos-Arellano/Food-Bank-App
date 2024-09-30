// src/components/HomeScreen.tsx
import React from 'react';
import '../styles/HomeScreen.scss';

const HomeScreen: React.FC = () => {
  return (
    <main className="home-screen">
      <h2>Bienvenido a la App del Banco de Empleos</h2>
      <p>Aquí podrás encontrar trabajos y gestionar los repartos de alimentos.</p>
    </main>
  );
};

export default HomeScreen;
