import React,{Component} from 'react';

import Axios from "axios";
import './Login.css';
import { Redirect } from 'react-router';

import Swal from "sweetalert2";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={

            user:{},
            userName:'',
            password:'',
            userType:'',
            redirect:false
        }
    }
    validateLogin =(event)=>{
        event.preventDefault();
        const tempUser = {
            userName:this.state.userName,
            password:this.state.password
        }
        Axios.post('http://localhost:8093/users-api/users',tempUser).then(response=>{

            this.setState({user:response.data,redirect:true});
            this.props.setLoggedInUserTypeToAdmin();



            Swal.fire({
                title: 'Logged In Successfully',
                text: 'Logged in Success!',
                icon: 'success',
                confirmButtonText: 'OK',

            });


        }).catch(error=>{
            Swal.fire({
                title: 'Logged In Failed',
                text: 'Please enter a valid username and password',
                icon: 'error',
                confirmButtonText: 'OK',

            });

        })

    }
    handleOnChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
             const {redirect} =this.state;
             if(redirect === true){
               return <Redirect to='/tours'/>
             }
        return(
            <React.Fragment>


            <div className="container-body">
            <div className="login-container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div id="first">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Login</h1>
                                    </div>
                                </div>
                                <form method="post">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input name="userName" type="text" name="userName" className="form-control" id="userName"
                                               aria-describedby="emailHelp" placeholder="Enter username" onChange={this.handleOnChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Password</label>
                                        <input name="password" type="password" name="password" id="password" className="form-control"
                                               aria-describedby="emailHelp" placeholder="Enter Password" onChange={this.handleOnChange}/>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center">By Login  you accept our <a href="/">Terms Of
                                            Use</a></p>
                                    </div>
                                    <div className="col-md-12 text-center ">
                                        <button onClick={(event)=>{this.validateLogin(event)}}
                                                className=" btn btn-block mybtn btn-primary tx-tfm">Login
                                        </button>
                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            </React.Fragment>

    );

    }
}
export default Login;