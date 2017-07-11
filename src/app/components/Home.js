import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        // example of how React manages the virtual DOM to only render things that change
        // with pain flashing turned on in dev tool it will show the status update after 3 seconds
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        return(
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
};