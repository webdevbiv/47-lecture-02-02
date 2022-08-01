import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: true,
            user: [{ name: 'peter' }],
            number: 0,
        }
        // this.onClickBtn = this.onClickBtn.bind(this); //binds method to state
    }
    // onClickBtn() {
    //     console.log('clicked', this.state);
    // }
    onClickBtn = () => {
        this.setState({ mode: !this.state.mode });
        // console.log('onClick', this.state);
    }
    onIncrement = () => {
        this.setState((prevState) => {
            // console.log({ prevState });
            return {
                number: prevState.number + 1
            }
        })
    }
    onDecrement = () => {
        // this.setState((prevState) => ({ number: }))
        this.setState((prevState) => {
            // console.log({ prevState });
            return {
                number: prevState.number - 1
            }
        })
    }
    render() {
        // console.log(`state`, this.state);
        return (
            <>
                <button
                    onClick={
                        // this.onClickBtn.bind.this
                        // () => this.onClickBtn()
                        // this.onClickBtn
                        this.onIncrement
                    }
                >Increment</button>
                <p>{this.state.number}</p>
                <button
                    onClick={this.onDecrement}
                >Decrement</button>
            </>
        )
    }
}

export default Toggle