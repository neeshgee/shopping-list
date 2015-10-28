window.$ = window.jQuery = require('jquery');

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import App from './components/App.jsx';

$(() => {
  let router = new Router();

  ReactDOM.render(
  <App router={router} />,
  document.getElementById('app')
);
});
