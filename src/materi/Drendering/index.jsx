import React from "react";
import Conditional from "./Pembahasan/Conditional";
import ListVar from "./Pembahasan/List";
import Variable from "./Pembahasan/Variable";


class Rendering extends React.Component {
    render() {
        return(
            <div>
                <Variable />
                <Conditional /> 
                <ListVar />
            </div>
        )
    }
}

export default Rendering;