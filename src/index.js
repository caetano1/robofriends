import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //it is in the same directory
import App from './App.js'; 
import * as serviceWorker from './serviceWorker';
//import 'tachyons'; It didn't work, so I put the tachyouns tag in the index.html

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
