import React, { Component } from 'react';
import styled from 'styled-components';

// const Input = ({ }) => (
//     <StyledInput />
// )

export class InputControlled extends Component {
    render() {
        const { name, value, onChange, type } = this.props;
        return <StyledInput onChange={onChange} value={value} name={name} type={type} />;
    }
}
export class InputUncontrolled extends Component {
    render() {
        const { inputRef, defaultValue } = this.props;
        return <StyledInput ref={inputRef} defaultValue={defaultValue} />;
    }
}

const StyledInput = styled.input`
    width: 200px;
    color: black;
`;
