// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
