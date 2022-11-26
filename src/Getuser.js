import axios from 'axios';
import React, { Component } from 'react'
class FetchUserssEmailID extends Component {
    state = { 
        email:[]
     } 
     componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data);
            this.setState({email:response.data});
            // console.log(this.state.weathers);
        })
     }
    render() { 
        return (
            <>
            <h1>Fetching Email id </h1>
            <ul>
                {this.state.email.map(email1=> <li>{email1.username}- {email1.email}</li>)}
                <li>sanjeevi -727721euit141@skcet.ac.in</li>
            </ul>
            </>
        );
    }
}
 
export default FetchUserssEmailID;