import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


// import 'font-awesome/css/font-awesome.css';


// import Timeline from './components/Timeline/Timeline';
import Container from './Container';
// import Header from './Header';

export const load = () => {
  console.log('hi');

  ReactDOM.render(<Container />, document.getElementById('demo2'));
  // ReactDOM.render(<Header />, document.getElementById('headerDemo'));

};
load();

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
