// src/components/Sidebar.tsx
import React from 'react';
import '../views/DashboardView';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
