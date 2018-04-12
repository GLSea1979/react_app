import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import 'font-awesome/css/font-awesom.css';
import registerServiceWorker from './registerServiceWorker';

import Timeline from './components/Timeline/Timeline';
import Container from './Container';
import Header from './Header';

export const load = () => {
  console.log('hi');
  ReactDom.render(<Timeline />, document.getElementById('demo1'));
  ReactDom.render(<Container />, document.getElementById('demo2'));
  ReactDom.render(<Header />, document.getElementById('headerDemo'));

};
load();

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
