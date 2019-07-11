import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ResetGlobalStyled } from './style.js';
import App from './App';

ReactDOM.render(
  <Fragment>
    <ResetGlobalStyled />
    <App />
  </Fragment>,
  document.getElementById('root')
);
