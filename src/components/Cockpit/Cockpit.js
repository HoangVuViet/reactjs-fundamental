import React, { useEffect } from 'react';
import './Cockpit.css';
const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p>{props.title}</p>
      <button onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};
export default Cockpit;
