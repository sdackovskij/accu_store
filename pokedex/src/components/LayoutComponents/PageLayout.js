import React from "react";
import Sidenav from "../ViewComponents/Sidenav";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Sidenav />

        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
