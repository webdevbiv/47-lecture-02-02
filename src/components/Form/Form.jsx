import React, { Component, createRef } from 'react';
import { InputControlled, InputUncontrolled } from '../Input02/Input02'

class Form extends Component {
    state = {
        inputRef: React.createRef(),
    };

    render() {
        console.log(this.state.inputRef);
        return (
            <form onSubmit={() => console.log('submitted')}>
                <InputControlled />
                <br />
                <InputUncontrolled
                    defaultValue={'Chris'}
                    inputRef={this.state.inputRef}
                />
            </form>
        )
    }
}

export default Form;