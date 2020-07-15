import React from 'react';
import './Person.css';
class Person extends React.Component {
  render() {
    console.log('[Person.js] rendering');
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          Name: {this.props.name} and age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;
