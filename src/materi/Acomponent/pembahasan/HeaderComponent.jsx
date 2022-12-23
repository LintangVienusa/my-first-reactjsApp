import React from "react";

class HeaderComponent extends React.Component{
    render (){
        return (
            // console.log(this)
            <div>
                <hr></hr>
                <center><h1>{this.props.vals} </h1></center>
                <hr></hr>
            </div>
        )
    }
}

export default HeaderComponent;