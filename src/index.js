import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //it is in the same directory
import Card from './Card.js'; 
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots'; //destructured
//import 'tachyons'; It didn't work, so I put the tachyouns tag in the index.html

// greeting is a prop, you can reference to it in the Hello.js
ReactDOM.render(
    <CardList robots={robots}/>, //robots is CardList props
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
