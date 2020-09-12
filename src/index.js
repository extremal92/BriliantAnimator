import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';



const app = <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>


ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
