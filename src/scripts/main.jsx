window.$ = window.jQuery = require('jquery');

import Parse from 'parse';

Parse.initialize(
  "OgXEcaYXrnPIaG04dhXBjbyHB1VhGdqGD3KxiLbT",
  "UX7UBPwWnTRVQUP6vhcotqewIr5PJQtQORlMwzVx"
);



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
