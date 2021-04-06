import React, { Component } from "react";
import "./Calculator.css";

export default class Calculator extends Component {
  state = {
    input: "",
    result: "0",
  };

  doMath = (operation) => {
    // eslint-disable-next-line no-useless-escape
    const regexToCatchSymbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/g;
    const components = operation.split(regexToCatchSymbols);
    const numbers = components.map((num) => parseFloat(num));
    const operator = operation
      .split("")
      .filter((elem) => regexToCatchSymbols.test(elem));

    // const complexMath = (operators, numbers) => {
    //   const multiply = operators.findIndex((elem) => elem === "*");
    //   if (multiply !== -1) {
    //     console.log(multiply);
    //   }
    // };
    // complexMath(operator, numbers);

    const doMath = {
      "+": function (x, y) {
        return x + y;
      },
      "-": function (x, y) {
        return x - y;
      },
      "/": function (x, y) {
        return x / y;
      },
      "*": function (x, y) {
        return x * y;
      },
    };

    console.log(doMath[operator](numbers[0], numbers[1]));
    this.setState({ result: doMath[operator](numbers[0], numbers[1]) });
  };

  clearResult = () => {
    this.setState({ result: "" });
  };

  handleNumbers = (recentNumber) => {
    if (recentNumber === 0 && this.state.result === "0") {
      return;
    }

    if (
      this.state.result === "0" ||
      this.state.result === "+" ||
      this.state.result === "-" ||
      this.state.result === "/" ||
      this.state.result === "*"
    ) {
      this.clearResult();
    }

    this.setState((prevState) => ({
      input: prevState.input.concat(recentNumber),
      result: prevState.result.concat(recentNumber),
    }));
  };

  handleOperators = (operator) => {
    this.setState((prevState) => ({
      input: prevState.input.concat(operator),
      result: operator,
    }));
  };

  handleClick = (e) => {
    switch (e.target.id) {
      case "clear":
        this.setState({
          input: "",
          result: "0",
        });
        break;
      case "divide":
        this.handleOperators("/");
        break;
      case "multiply":
        this.handleOperators("*");
        break;
      case "substract":
        this.handleOperators("-");
        break;
      case "add":
        this.handleOperators("+");
        break;
      case "equals":
        this.setState((prevState) => ({
          ...prevState,
          input: prevState.input.concat("="),
        }));
        this.doMath(this.state.input);
        break;
      case "decimal":
        this.setState((prevState) => ({
          ...prevState,
          input: prevState.input.concat("."),
        }));
        break;
      case "zero":
        this.handleNumbers(0);
        break;
      case "one":
        this.handleNumbers(1);
        break;
      case "two":
        this.handleNumbers(2);
        break;
      case "three":
        this.handleNumbers(3);
        break;
      case "four":
        this.handleNumbers(4);
        break;
      case "five":
        this.handleNumbers(5);
        break;
      case "six":
        this.handleNumbers(6);
        break;
      case "seven":
        this.handleNumbers(7);
        break;
      case "eight":
        this.handleNumbers(8);
        break;
      case "nine":
        this.handleNumbers(9);
        break;

      default:
        return;
    }
  };
  render() {
    return (
      <div id="calculator" className="calculator">
        <div id="display" className="display">
          <div className="display-1">{this.state.input}</div>
          <div className="display-2">{this.state.result}</div>
        </div>
        <div id="clear" className="clear" onClick={this.handleClick}>
          AC
        </div>
        <div id="divide" className="divide" onClick={this.handleClick}>
          /
        </div>
        <div id="multiply" className="multiply" onClick={this.handleClick}>
          X
        </div>
        <div id="substract" className="substract" onClick={this.handleClick}>
          {" "}
          -{" "}
        </div>
        <div id="add" className="add" onClick={this.handleClick}>
          +
        </div>
        <div id="equals" className="equals" onClick={this.handleClick}>
          =
        </div>
        <div id="decimal" className="decimal" onClick={this.handleClick}>
          .
        </div>
        <div id="zero" className="zero" onClick={this.handleClick}>
          0
        </div>
        <div id="one" className="one" onClick={this.handleClick}>
          1
        </div>
        <div id="two" className="two" onClick={this.handleClick}>
          2
        </div>
        <div id="three" className="three" onClick={this.handleClick}>
          3
        </div>
        <div id="four" className="four" onClick={this.handleClick}>
          4
        </div>
        <div id="five" className="five" onClick={this.handleClick}>
          5
        </div>
        <div id="six" className="six" onClick={this.handleClick}>
          6
        </div>
        <div id="seven" className="seven" onClick={this.handleClick}>
          7
        </div>
        <div id="eight" className="eight" onClick={this.handleClick}>
          8
        </div>
        <div id="nine" className="nine" onClick={this.handleClick}>
          9
        </div>
      </div>
    );
  }
}
