import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/stars.css';


const NotFound404 = () => (
  <div className="stars-container">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div id="title">
      <i className="fa fa-rocket fa-2x slow-spin red-1" aria-hidden="true"></i>
      <br />
      <br />
      Page Not Found (404)
      <p><Link to="/dashboard" className="green-4">Take me home</Link></p>
    </div>
  </div>
)

export default NotFound404;
