import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({ name, value, type, disabled, check }) => (
    <InputStyled
        disabled={disabled}
        name={name}
        value={value}
        type={type}
        check={check}
    />
)


const InputStyled = styled.input`
    ${'' /* font-size: 16px;
    background-color: ${({ check }) => check ? 'blue' : 'pink'} */}
    ${({ check }) => check && css`
        background-color: blue;
        color: white;
    `}
`;

export default Input