import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="line"></div>
        {/* timeline item*/ }
        <div className="item">
          <div className="avatar">
            <img
            alt="Gary"
            src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
            Gary
          </div>
          <span className="time">
            An hour ago
          </span>
          <p>Ate lunch</p>
          <div className="commentCount">
            2
          </div>
        </div>
        <div className="item">
          <div className="avatar">
          <img
          alt="Gary"
          src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
          Gary
          </div>
        </div>
        <span className="time">
          10 am
        </span>
        <p>Read Chapter 2</p>
        <div className="commentCount">
          3
        </div>
        <div className="item">
          <div className="avatar">
          <img
          alt="Gary"
          src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
          Gary
          </div>
        </div>
        <span className="time">
          9 am
        </span>
        <p>Washed face</p>
        <div className="commentCount">
          2
        </div>
        <div className="item">
          <div className="avatar">
          <img
          alt="Gary"
          src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
          Gary
          </div>
        </div>
        <span className="time">
          7 am
        </span>
        <p>Woke to a dream </p>
        <div className="commentCount">
          1
        </div>

        {/* ... */ }
      </div>
    )
  }
}

export default Content;
