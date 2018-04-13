import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
    console.log("here I am>>>>>>>>>>>>>");
    return (

      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Froggy"/>
          
          <Content />
        </div>
      </div>
    )
  }
}

export default App;
