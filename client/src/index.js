import React from 'react';
import ReactDOM from 'react-dom';
import App from './App' ;
import './index.css';

ReactDOM.render(
	<div>

	  <div>
        <ul className="header">
         <li><a  href="/">HOME</a></li>
          <li><a  href="/upload">UPLOAD</a></li>
  		  <li><a href="/display">FILENAMES</a></li>
  		  
        </ul> 
      </div>

      <div>
      	     
      </div>
      
	<App/>

	</div>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
