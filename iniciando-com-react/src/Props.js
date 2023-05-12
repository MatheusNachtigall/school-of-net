import React, { Component } from "react";
import Panel from "./Panel";

export default class Props extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attr } = this.props;
    return (
      <div>
        {<h1>{attr}</h1>}
        <Panel headercolor="red" headertext="testando" data="School of net" />
      </div>
    );
  }
}
