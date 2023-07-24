import { Component } from 'react';
import Table from './Table';
import From from './Form';
import Api from './Api';

class App extends Component {

    state = {
        allEmployee: [
            { name: 'John Doe', job: 'Software Engineer' },
            { name: 'Jane Smith', job: 'Graphic Designer' },
            { name: 'Mike Johnson', job: 'Data Analyst' },
            { name: 'Sarah Adams', job: 'Marketing Manager' }
        ]
    }

    removeEmployee = (index) => {
        const { allEmployee } = this.state
        let filteredEmployess = allEmployee.filter((emp, i) => {
            return i !== index
        })
        this.setState({ allEmployee: filteredEmployess })
    }

    handleSubmit = (employee) => {
        console.log("handleSubmit", employee);
        this.setState((prevState) => ({
          allEmployee: [...prevState.allEmployee, employee]
        }));
      }
      
    render() {
        const { allEmployee } = this.state;
        return (<div className='App' >
            <h1> Employees</h1>
            <Table  removeEmployee={this.removeEmployee} allEmployee={allEmployee} />
            <From  handleSubmit={this.handleSubmit} />
            <Api/>
        </div>)
    }
}


export default App;