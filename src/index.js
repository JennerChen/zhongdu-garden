import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./media_0-767.css";
import "./media_768-991.css"
import "./media_992-1199.css"
import "./media_1200.css"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
