import React from 'react';
// const withClass = (props) => (
//   <div className={props.classes}>{props.children}</div>
// );
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent name="Hoang Vu"></WrappedComponent>
    </div>
  );
};
export default withClass;
