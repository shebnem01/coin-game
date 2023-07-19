import React, { Component } from "react";
import styles from "./GameContent.module.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import ResultCoin from "./ResultCoin";
export default class GameContent extends Component {
  constructor() {
    super();
    this.state = {
      flips: null,
      heads: 0,
      tails: 0,
      result: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let newFlips = [img1, img2];
    let randomF = Math.floor(Math.random() * newFlips.length);
    this.setState({ flips: newFlips[randomF] });

    randomF === 0
      ? this.setState({ heads: this.state.heads + 1 })
      : this.setState({ tails: this.state.tails + 1 });
    this.setState({ result: this.state.result + 1 });
  }
  render() {
    return (
      <div className={styles["game-content"]}>
        <h3>Let's flip a coin</h3>
        <button onClick={this.handleClick} className="play-icon">
          Flip me
        </button>
        <img width="100px" src={this.state.flips} alt="" />
        <ResultCoin
          result={this.state.result}
          heads={this.state.heads}
          tails={this.state.tails}
        />
      </div>
    );
  }
}
