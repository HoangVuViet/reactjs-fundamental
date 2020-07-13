import React from 'react';
import './Person.css';
const person = (props) => {
  console.log(props.name);
  return (
    <div className="Person">
      <p onClick={props.click}>
        Name: {props.name} and age: {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;