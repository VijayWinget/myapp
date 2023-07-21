import { Component } from "react";



const TableHead = () => {
    return (<thead>
        <th>Name</th>
        <th>Job</th>
    </thead>)
}
 // const  employees  =  [
    //     { name: 'John Doe', job: 'Software Engineer' },
    //     { name: 'Jane Smith', job: 'Graphic Designer' },
    //     { name: 'Mike Johnson', job: 'Data Analyst' },
    //     { name: 'Sarah Adams', job: 'Marketing Manager' }
    //   ];


const TableBody = (data) => {
const employeess =data.props.allEmployee;
console.log("table body",data.props);
    return (
        <tbody>
           {
            employeess.map((data)=>{
        return(
            <tr>
            <td>{data.name}</td>
            <td>{data.job}</td>
        </tr>
        )
    })
}
        </tbody>)
}


class Table extends Component {
    render() {
        const allEmployee = this.props
        console.log("table: ", allEmployee);
        return (<table>
            <TableHead />
            <TableBody props={allEmployee}/>
        </table>)
    }

}

export default Table;