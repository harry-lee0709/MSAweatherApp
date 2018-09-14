import * as React from "react";

export interface IMyProps {
  getWeather: any;
}

class Form extends React.Component<IMyProps> {
  public render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get weather</button>
      </form>
    );
  }
}

export default Form;
