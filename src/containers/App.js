import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { id: 'sadasd', name: 'Hoang', age: '29' },
      { id: 'asdaw', name: 'Vu', age: '25' },
      { id: 'asawds', name: 'Viet', age: '24' },
    ],
    otherState: 'some other value',
    showPersons: false,
  };
  switchNameHandler = (newName) => {
    // console.log('switchName Success!');
    //Do not mutate state directly. Use setState()
    // DO NOT DO THIS:  this.state.persons[0].name = 'Quynh';
    this.setState({
      persons: [
        { name: newName, age: '29' },
        { name: 'Vu', age: '25' },
        { name: 'Viet', age: '25' },
      ],
    });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    //copy object person with spread operator
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
          ></Persons>
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.title}
          clicked={this.togglePersonsHandler}
        ></Cockpit>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
// state = {
//   persons: [
//     { name: 'Hoang', age: '29' },
//     { name: 'Vu', age: '25' },
//     { name: 'Viet', age: '24' },
//   ],
// };
// switchNameHandler = () => {
//   // console.log('switchName Success!');
//   //Do not mutate state directly. Use setState()
//   // DO NOT DO THIS:  this.state.persons[0].name = 'Quynh';
//   this.setState({
//     persons: [
//       { name: 'Hoang', age: '29' },
//       { name: 'Vu', age: '25' },
//       { name: 'Viet', age: '25' },
//     ],
//   });
// };
