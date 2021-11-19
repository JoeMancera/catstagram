/* eslint-disable react/destructuring-assignment */
import 'jsdom-global/register';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const ProviderMock = (props) => (
  <BrowserRouter history={history}>
    {props.children}
  </BrowserRouter>
);

export default ProviderMock;
