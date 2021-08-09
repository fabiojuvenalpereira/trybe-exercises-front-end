import React from 'react';
import '../App.css';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loading-page">
        LOADING
      </div>
    );
  }
}

export default Loading;
