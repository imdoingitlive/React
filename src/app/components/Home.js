import React from 'react';

export class Home extends React.Component {
    render() {
        return(
            <div>
                <p>In a new component!</p>
                <br/>
                <p>Dynamic Data!</p>                
                { 2 + 2 } { "...Behind the scenes this is adding 2 and 2 together to output 4"}
                <br/>
                { "Hello!" }
                <br/>
                { 5 === 2 ? "Yes" : "No" } { "...Example of a ternary operation comparing whether 5 is equal to 2" }
            </div>
        );
    }
}