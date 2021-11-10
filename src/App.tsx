import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from './store/actions';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="App">
      <div>working</div>
    </div>
  );
};

export default App;
