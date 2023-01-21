import React from "react";
import validator from "validatorjs";

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


class SignUp extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username, email, password } = this.state;

        let data = { username, email,password };
        
        let rules = {
            username: 'required',
            email: 'required|email',
            password: 'min:8|required'
        };

        let validation = new validator( data,rules );
        if(validation.passes());
        alert(`
            Pendaftaran Berhasil!
            Username : ${username}
            Email: ${email}
        `)
        this.setState({
            errors: [
                ...validation.errors.get('usernmae'),
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })
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
                <center><h4>Sign Up</h4></center>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label="Username" 
                        type="text" 
                        name="username" 
                        onChange={value => this.setState({username:value})}  
                    />
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

export default SignUp