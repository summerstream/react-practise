import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
