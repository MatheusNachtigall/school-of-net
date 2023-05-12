import React, { Component } from "react";

export default class Panel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headercolor, headertext, data } = this.props;
    return (
      <div className="panel">
        <div
          className="panel-head "
          style={{ width: "100%", backgroundColor: headercolor }}
        >
          {headertext}
        </div>
        <div className="panel-body">{data}</div>
      </div>
    );
  }
}
