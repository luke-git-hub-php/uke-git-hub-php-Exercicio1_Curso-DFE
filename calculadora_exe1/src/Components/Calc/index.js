import React, { Component } from "react";
import "./styles.css";
class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
        };
        this.handleChangeInput1 = this.handleChangeInput1.bind(this);
        this.handleChangeInput2 = this.handleChangeInput2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeInput1(event) {
        this.setState({ value1: Number(event.target.value) });
    }
    handleChangeInput2(event) {
        this.setState({ value2: Number(event.target.value) });
    }
    handleSubmit(event) {
        alert(`Resultado da Soma: ${this.state.value1 + this.state.value2}`);
        event.preventDefault();
    }
    render() {
        return (<div className="calc-buttons" >
            <br />
            <section>
                <p> Digite o primeiro número: </p>
                <input value={this.state.num1}
                    onChange={this.handleChangeInput1}
                    className="num1"
                    type="number" />
                <br />
                <p> Digite o segundo número: </p> <
                    input value={this.state.num1}
                    onChange={this.handleChangeInput2}
                    className="num2"
                    type="number" />
                <br />
                <br />
                <button onClick={this.handleSubmit} > + </button> <br />
            </section> </div>
        );
    }
}
export default Calc;