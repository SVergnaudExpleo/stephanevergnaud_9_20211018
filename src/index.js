/**
 * Main page for the project
 * 
 * @author Stéphane
 * @version 0.1
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './Containers/dashboard';
import './styles.css';

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