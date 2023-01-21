import React from "react";

class FormElement extends React.Component {
    state = {
        name: '',
        major: '',
        studyMethod: '',
        address: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            Name: ${this.state.name}
            Major: ${this.state.major}
            Payment Method: ${this.state.studyMethod}
            Address: ${this.state.address}
            Student Membership: ${this.state.member ? 'Yes' : 'No' }
        `)
        this.setState({
            name: '',
            major: '',
            studyMethod: '',
            address: '',
            member: false
        })
    }
    render() {
        return (
            <div  style={{margin: '200px auto', border:'1px solid gray', padding:'20px' }}>
                <form action="" onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input 
                            type="text" 
                            name="name" 
                            onChange={e => this.setState({name: e.target.value})} 
                            defaultValue={this.state.name}
                        />
                    </label>
                    <br />
                    <label>
                        Major: 
                        <select name="major" onChange={e => this.setState({major: e.target.value})} >
                            <option value="">- Select Major -</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Informatics System">Informatics System</option>
                            <option value="Business Management">Business Management</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Payment method:
                        <input type="radio" value="Per Semester" name="studyMethod" onChange={e => this.setState({studyMethod: e.target.value})}  />Per Semester
                        <input type="radio" value="Full Year" name="studyMethod" onChange={e => this.setState({studyMethod: e.target.value})}  />Full Year
                    </label>
                    <br />
                    <label>
                        Address: <textarea cols="30" rows="10" name="address" onChange={e => this.setState({address: e.target.value})} />
                    </label>
                    <br />
                    <label>
                        Register to Student membership <input name="membership" type="checkbox" checked={this.state.member} onChange={e => this.setState({member: e.target.checked})} value={true} />
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormElement