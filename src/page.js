import React from 'react';
import Presentation from './presentation';

import styled, { css } from 'react-emotion';

const logo = css`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px;
  z-index: 42;
  font-size: 1.2rem;
  color: #c1c1c1;
`;

const icon = css`
  display: inline-block;
  margin-right: 15px;
  line-height: 0.8rem;
  font-size: 0.8em;
`;

const iconFas = css`
  padding-bottom: 2px;
`;

const label = css`
  display: inline-block;
`;

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <div className={logo}>
          <div className={icon}><i className={`${iconFas} far fa-user`}></i></div>
          <span className={label}>Interview prep.</span>
        </div>
        <Presentation />
      </div>
    );
  }
}
