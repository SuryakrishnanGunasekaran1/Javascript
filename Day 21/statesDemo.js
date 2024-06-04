import React from "react";
class Titans extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Species: "Godzilla",
        Power: "Atomic breath",
        Height: "393 feet",
        Move: "Kiss of Death "
      };
    }
    render() {
        const st ={
            color:"skyblue"
        }
      return (
        <div style ={st}>
          <h1>Titans</h1>
          <p>
          Name - {this.state.Species}<br />
           Power - {this.state.Power}<br />
           Height - {this.state.Height}<br />
            Signature Move - {this.state.Move}.
          </p>
        </div>
      );
    }
  }
  export default Titans