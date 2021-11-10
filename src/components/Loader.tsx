import React from 'react';
import './styles.css';

const Loader: React.FC = () => (
  <div className={'spinnerContainer'}>
    <div className={'spinner'}></div>
  </div>
);

export default Loader;
