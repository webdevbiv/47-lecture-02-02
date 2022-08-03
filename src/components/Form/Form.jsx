import React, { Component, createRef } from 'react';
import { InputControlled, InputUncontrolled } from '../Input02/Input02'

class Form extends Component {
    state = {
        inputRef: React.createRef(),
        personName: '',
        users: []
    };
    onSubmit = (event) => {
        event.preventDefault();
        console.log({ event }, 'submitted')
        this.setState({
            users: [...this.state.users, this.state.personName],
            personName: ''
        })
        if (this.state.inputRef && this.state.inputRef.current) {
            console.log(this.state.inputRef.current.value);
            this.setState({
                users: [...this.state.users, this.state.inputRef.current.value],
                // inputRef: this.state.inputRef.current.value,
            })
        }

    }
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target.name, event.target.value);
        // this.setState({ user: this.state.users.push() })
    }
    deleteUser = (user) => {
        // this.setState({ users: this.state.users.filter((personName) => personName !== user) })
    }

    render() {
        // console.log(this.state.inputRef);
        console.log(this.state);
        return (
            <div>
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
                {this.state.personName.length < 2 && <span>Error</span>}
                <ul>
                    {this.state?.users?.map((user) => (
                        <>
                            <li key={user}>{user}</li>
                            <button onClick={() => this.deleteUser(user)}>X</button>
                        </>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Form;