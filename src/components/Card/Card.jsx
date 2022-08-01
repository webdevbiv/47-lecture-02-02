import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonClass from '../../components/ButtonClass/ButtonClass'

class Card extends Component {
    state = {
        bgColor: 'black',
        show: false,
    }

    onChangeColor = () => {
        console.log(this.state.bgColor);
        this.setState({ bgColor: 'yellow' })
    }

    onShow() {
        this.setState({ show: !this.state.show })
    }

    render() {
        console.log(this.state.bgColor);
        return (
            <Wrapper bgColor={this.state.bgColor}>
                <ButtonClass title='Change Background'
                    onClick={this.onChangeColor}
                />
                <ButtonClass title='Show Surprise'
                    onClick={() => this.onShow()}
                />
                {
                    this.state.show &&
                    (
                        <div
                            style={{
                                marginTop: '50px',
                                color: this.state.bgColor === 'yellow' ? 'black' : 'white',
                            }}
                        >
                            Surprise !!!!
                        </div>
                    )
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-color: ${({ bgColor }) => bgColor};
`;

export default Card;