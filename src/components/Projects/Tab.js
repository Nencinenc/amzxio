import React from "react";
import { render } from "react-dom";

import styled from "styled-components";

const Heading = styled.h2`
  border: 1px solid #ddd;
  background: rebeccapurple;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;

  p {
    margin: 0;
  }
`;

class Tab extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <Heading onClick={this.toggleOpen}>Click me to open</Heading>
                <Content open={this.state.open}>
                    <p>Consider me opened!</p>
                </Content>
            </div>
        );
    }
}


export default Tab;