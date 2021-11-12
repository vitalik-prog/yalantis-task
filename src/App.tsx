import React from 'react';
import './App.css';
import Toaster from './components/Toaster';
import EmployeesPage from './pages/Employees';

const App: React.FC = () => {
  return (
    <div className="App">
      <EmployeesPage />
      <Toaster />
    </div>
  );
};

export default App;
