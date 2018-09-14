import * as React from "react";

interface IMyProps {
  text: string;
}

class Titles extends React.Component<IMyProps> {
  public render() {
    const { text } = this.props;
    return (
      <div>
        <h1 className="title-container__title">
          {text}
          Weather Finder
        </h1>
        <p className="title-container__subtitle">
          Find out temperature, conditions and more...
        </p>
      </div>
    );
  }
}

export default Titles;
