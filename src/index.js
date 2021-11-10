import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './Containers/dashboard';
import './styles.css';

/**
 * Main page for the project
 * Page show the user sport statistics in charts
 * 
 * @author Stéphane
 * @version 1
 */

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className='content-container'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='dashboard-container'>
        <Dashboard />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);