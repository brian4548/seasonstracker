import React from "react";

const LoadingCircle = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

LoadingCircle.defaultProps = {
    message: "Loading..."
}

export default LoadingCircle;
