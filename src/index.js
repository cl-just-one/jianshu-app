import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ResetGlobalStyled } from './style.js';
import { IconfontGlobalStyled } from './statics/iconfont/iconfont.js';
import App from './App';

ReactDOM.render(
  <Fragment>
    <ResetGlobalStyled />
    <IconfontGlobalStyled />
    <App />
  </Fragment>,
  document.getElementById('root')
);
