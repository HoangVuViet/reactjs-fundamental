import React, { useEffect } from 'react';
import './Cockpit.css';
const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('HTTP Request!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] Cleanup Work with useEffect()');
    };
  }, []);
  useEffect(() => {
    console.log('[Cockpit.js] 2nd effect');
    return () => {
      console.log('[Cockpit.js] cleanup work with 2nd effect');
    };
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
