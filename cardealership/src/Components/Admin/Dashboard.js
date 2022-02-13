import logo from '../../logo.svg';
import '../../Admin.css';
import React from 'react';

function dashboard() {
  return (
<div className="container">
    <div id="sidebar">
    <ul className="list">
        <li className="listelement">Home</li>
        <li className="listelement">Car managements</li>
        <li className="listelement">Messages</li>
        <li className="listelement">Settings</li>
        <li className="listelement">Logout</li>
    </ul>
    </div>
    <div id="main">
        this is a main page
    </div>
    <footer>

    </footer>
</div>) ;
}

export default dashboard;
