import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './routes'
import Router from './lib/index'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
