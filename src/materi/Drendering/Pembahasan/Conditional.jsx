import React from "react";

class Conditional extends React.Component {
    state = {
        isLoading: true,
    }
    render() {
        setTimeout(() =>{
            this.setState({
                isLoading: false,
            })
        }, 3000)
        // const isLogin = false;
        // let message = "";
        // if(isLogin){
        //     message = "Anda Sudah Login (isLogin TRUE)";
        // }else{
        //     message = "Anda Belum Login (isLogin FALSE)";
        // }

        return(
            <div>
                <b>Conditional Variable</b>
                { this.state.isLoading
                    ? <h2>Loading . . .</h2> 
                    : <h2>Welcome</h2> 
                }
                <hr></hr>
            </div>
        )
    }
}

export default Conditional;