import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingCircle from "./LoadingCircle";

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { lat: null, errorMessage: "" };
  //   }

  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> error: {this.state.errorMessage} </div>;
    } else if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return (
        <div>
          <LoadingCircle message="Please accept location request" />
        </div>
      );
    }
  }

  render() {
      return(
          <div className='border red'>
              {this.renderContent()}
          </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
