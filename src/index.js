// import react modules //
import React from 'react';
import ReactDOM from 'react-dom';
// import preject component //
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './styles.css';

// main component //
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className='content-container'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='content'>
        coucou
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);