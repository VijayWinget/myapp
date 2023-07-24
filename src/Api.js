import { Component } from "react";

class Api extends Component {
    state = {
        data : [
            {
                name : 'vi'
            },{
                name : 'v2'
            }
        ]
    }

    componentDidMount() {
        let url = "http://demo6134234.mockable.io/test";
        fetch(url)
          .then((response) => {
            console.log("API Response (Raw):", response);
            return response.json();
          })
          .then((data) => {
            console.log("API Response (Parsed):", data);
            // this.setState({ data: data });
            this.setState((prevState) => ({
                data: [...prevState.data,...data]
              }));

          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }

    render() {
        const list = this.state.data.map((val,index)=>{
            return (<li key={index} >{val.name}</li>)
        })
        return (<ul>{list}</ul>)
    }

}


export default Api;