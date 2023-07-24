import { Component } from "react";



const TableHead = () => {
    return (<thead>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
    </thead>)
}
 // const  employees  =  [
    //     { name: 'John Doe', job: 'Software Engineer' },
    //     { name: 'Jane Smith', job: 'Graphic Designer' },
    //     { name: 'Mike Johnson', job: 'Data Analyst' },
    //     { name: 'Sarah Adams', job: 'Marketing Manager' }
    //   ];


const TableBody = (data) => {
const employeess =data.allEmployee;
const removeEmployee = data.removeEmployee;

console.log("table body",data.props);
    return (
        <tbody>
           {
            employeess.map((data,index)=>{
        return(
            <tr key={index} >
            <td>{data.name}</td>
            <td>{data.job}</td>
            <td> <button onClick={()=>removeEmployee(index)}  >Delete</button> </td>
        </tr>
        )
    })
}
        </tbody>)
}


class Table extends Component {
    render() {
        const {allEmployee,removeEmployee} = this.props
        console.log("table: ", allEmployee);
        return (<table>
            <TableHead />
            <TableBody  removeEmployee={removeEmployee}  allEmployee={allEmployee}/>
        </table>)
    }

}

export default Table;