import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }
}

export default Loading;
