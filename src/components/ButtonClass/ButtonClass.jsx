import React, { Component } from 'react';

class ButtonClass extends Component {
    render() {
        // console.log(this.props);
        const { title, onClick } = this.props;
        return <button onClick={onClick}>{title}</button>;
    }
}

export default ButtonClass;