import React from "react";
import validator from 'validatorjs';

const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label htmlFor="">{label} : </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: `red`, marginLeft: `-20px`}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li> )
            }
        </ul>
    )
}


class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;

        let data = { email,password };
        
        let rules = {
            email: 'required|email',
            password: 'min:8|required'
        };

        let validation = new validator( data,rules );
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })

        // let message = [];

        // if (email.length === 0) {
        //     message = [...message, 'Email tidak boleh kosong'];
        // }

        // if (password.length === 0) {
        //     message = [...message, 'Password tidak boleh kosong'];
        // }else if(password.length < 8){
        //     message = [...message, 'Password terlalu lemah'];
        // }
        
        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if(!re.test(String(email).toLowerCase())) {
        //     message = [...message, 'Email tidak valid'];
        // }


        // if(message.length > 0) {
        //     this.setState({
        //         errors: message
        //     }, () => console.log(this.state.errors) )
        // }else{
        //     alert(`
        //         Email: ${this.state.email}
        //         Password: ${this.state.password}
        //     `);
        //     this.setState({
        //         errors: []
        //     })
        // }
    }

    render() {
        const style = {
            width: '350px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                <ShowErrors errors={this.state.errors} />
                <center><h4>Login Form</h4></center>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label="Email" 
                        type="email" 
                        name="email" 
                        onChange={value => this.setState({email:value})}  
                    />
                    <Input 
                        label="Password" 
                        type="password" 
                        name="password" 
                        onChange={value => this.setState({password:value})}  
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Validation