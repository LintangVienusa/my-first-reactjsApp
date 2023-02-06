import React from "react";
import Title from "./Title";

class LifeCycle extends React.Component {
    state = {
        name: "Components",
        view: true,
        count: 0
    }

    render() {
        console.log("RENDER")
        return (
            <div>
                {
                    this.state.view && <Title name={this.state.name} count={this.state.count} />
                }

                <button onClick={() => this.setState({view: false})}>RELEASE</button>
                <button onClick={() => this.setState({name: 'Class'})}>UPDATE</button>
                <button onClick={() => this.setState({count: this.state.count + 1})}>COUNT</button>
            </div>
        )
    }
}

export default LifeCycle;