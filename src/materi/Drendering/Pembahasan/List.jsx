import React from "react";

class ListVar extends React.Component {
    state = {
        users:['John Doe', 'Jane Doe', 'Jack Doe']
    }
    render() {
        return(
            <div>
                <b>List Variable</b>
                <ul>
                    {
                        // this.state.users.map((user, i) => <li key={i}>{user}</li>)
                        this.state.users.map(function(user, i ) {
                            return <li key={i}>{user}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListVar