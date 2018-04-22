import React, { Component } from 'react';

class Row extends Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className} style={{ display: 'flex' }}>
        {children}
      </div>
    );
  }
}

export default Row;