import React, { Component } from 'react';

class Column extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ flex: 1 }}>
        {children}
      </div>
    );
  }
}

export default Column;