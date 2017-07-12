import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            // set homeLink to equal the value of initialLinkName
            homeLink: props.initialLinkName
        };
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

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    // created function that takes in the event from the input field and sets the homeLink value to whatever the input is
    // link 48 created the input field to let the homeLink be changed
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input onChange={(event) => this.onHandleChange(event)} type="text" value={this.state.homeLink} />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    // set the initialLinkName prop type
    initialLinkName: React.PropTypes.string
};