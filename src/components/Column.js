import React, { Component } from 'react';

class Column extends Component {
  render() {
    const { className, flex, children } = this.props;
    return (
      <div className={className} style={{ flex: flex || 1 }}>
        {children}
      </div>
    );
  }
}

export default Column;