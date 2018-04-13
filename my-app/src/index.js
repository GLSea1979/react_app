import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';






import Container from './Container';

const activities = [
  {
    timestamp: new Date().getTime(),
    text: 'Ate lunch',
    user: {
      id: 1,
      name: 'Nate',
      avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
    },
    comments: [{from: 'Ari', text: 'Me too!'}]
  },
  {
    timestamp: new Date().getTime(),
    text: 'Bought a barracuda',
    user: {
      id: 2,
      name: 'Ari',
      avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
    },
    comments: [{from: 'Bill', 'Hank', 'Fried Chicken'}]
  }
];

export const load = () => {
  console.log('hi');
  ReactDOM.render(<Container />, document.getElementById('demo2'));
};
load();

registerServiceWorker();
