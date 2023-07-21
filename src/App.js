import {Component } from 'react';
import Table from './Table';

class App extends Component {
    render(){
        const myemployees = [
            { name: 'John Doe', job: 'Software Engineer' },
            { name: 'Jane Smith', job: 'Graphic Designer' },
            { name: 'Mike Johnson', job: 'Data Analyst' },
            { name: 'Sarah Adams', job: 'Marketing Manager' }
          ];
      return (<div className='App' >
        <h1> My Table</h1>
        <Table  allEmployee={myemployees} />
        </div>)
    }
}


export default App;