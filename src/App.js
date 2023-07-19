import React, { Component } from "react";
import GameContent from "./components/GameContent";
import Container from "./components/Container";

export default class App extends Component {
  render() {
    return (
      <Container>
        <GameContent />
      </Container>
    );
  }
}
