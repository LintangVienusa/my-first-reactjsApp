import React from "react";

class Variable extends React.Component {
    state = {
        a: null,
        b: true,
        c: '',
        d: 0
    }
    render() {
        return(
            <div>
                <b> Unrendered variable </b>
                <div>a: {this.state.a}</div>
                <div>b: {this.state.b}</div>
                <div>c: {this.state.c}</div>
                <div>d: {this.state.d}</div>
                <div>e: {this.props.e}</div>
                <hr></hr>
            </div>
        )
    }
}

export default Variable;