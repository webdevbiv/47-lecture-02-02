import React, { Component, createRef } from 'react';
import { InputControlled, InputUncontrolled } from '../Input02/Input02'

class Form extends Component {
    state = {
        inputRef: React.createRef(),
        personName: 'chris'
    };
    onSubmit = (event) => {
        event.preventDefault();
        console.log({ event }, 'submitted')
    }
    onChange = (event) =>
        this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.name, event.target.value);

    render() {
        // console.log(this.state.inputRef);
        console.log(this.state);
        return (
            <form onSubmit={this.onSubmit}>
                <InputControlled
                    name='personName'
                    type='text'
                    value={this.state.personName}
                    onChange={this.onChange}
                />
                <br />
                <InputUncontrolled
                    defaultValue={'Chris'}
                    inputRef={this.state.inputRef}
                />
                <br />
                <button type='submit'>submit</button>
            </form>
        )
    }
}

export default Form;