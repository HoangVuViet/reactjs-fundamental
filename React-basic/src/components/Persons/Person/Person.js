import React, { Fragment } from 'react';
import './Person.css';
import WithClass from '../../../hoc/withClass';
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputElementsRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementsRef.current.focus();
  }
  render() {
    console.log('[Person.js] rendering');
    return (
      <Fragment>
        <div>
          <p onClick={this.props.click}>
            Name: {this.props.name} and age: {this.props.age}
          </p>
          <p>{this.props.children}</p>
          <p>{this.props.data}</p>
          <input
            ref={this.inputElementsRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Fragment>
    );
  }
}
export default WithClass(Person, 'Person');
