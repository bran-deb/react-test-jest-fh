import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './components/CounterApp';
import Saludo from './components/Saludo';

import './index.css'


const divRoot = document.querySelector('#root')

// ReactDOM.render(<CounterApp />, divRoot)
ReactDOM.render(<Saludo mensaje='soy un mensaje' />, divRoot)