import React, { Component } from 'react';

// const 

// function Column({
//   children,
//   className,
// }) {
//   return (
//     <
//   )
// }

class Column extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className} style={{ flex: 1 }}>
        {children}
      </div>
    );
  }
}

export default Column;