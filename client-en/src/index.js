import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Important: import it before App otherwise ant-design overrides styles!
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter basename='/en'>
        <App />
    </BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();
