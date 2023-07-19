import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResultCoin extends Component {
  render() {
    let { result, tails, heads } = this.props;
    return (
      <span className="result">
        Out of {result} flips ,there have been {heads}
        heads and {tails} tails
      </span>
    );
  }
}
ResultCoin.propTypes = {
  result: PropTypes.number,
  heads: PropTypes.number,
  tails: PropTypes.number,
};
