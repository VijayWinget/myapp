import { Component } from "react";

class From extends Component {
    initialState = {
        name: '',
        job: ''
    }

    state = this.initialState;

    handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({ [name]: [value] })
    }

    formSubmit = ()=>{
        const employee = this.state
        console.log(employee);
        this.props.handleSubmit(employee)
        this.setState(this.initialState)
    }

    render() {
        return (
            <form>
                <label htmlFor="name">First name:</label><br />
                <input type="text" id="name" name="name"  value={this.state.name}  onChange={this.handleChange} /><br />
                <label htmlFor="job">Job</label><br />
                <input type="text" id="job" name="job" value={this.state.job}  onChange={this.handleChange} /><br /><br />
                <input type="button" value="Submit" onClick={this.formSubmit}  />
            </form>
        );
    }
}


export default From;