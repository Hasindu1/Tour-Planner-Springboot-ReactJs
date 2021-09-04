import React, {Component} from 'react';
import Home from "./components/home/Home";
import {Switch,Route} from 'react-router-dom';
import Login from "./components/login/Login";
import TourList from "./components/packages/TourList";
import NewTourItem from "./components/packages/NewTourItem";
import NavBar from "./components/navigation/NavBar";

class App extends Component{
    persistedData;
    constructor(props){
            super(props);
            this.state={
                loggedInUserType:"",
            }


    }

        componentDidMount() {
        this.persistedData = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.setState({
                loggedInUserType:this.persistedData.loggedInUserType,
            });
        }else{
            this.setState({
                loggedInUserType:"normal",
            });
        }
        }

     componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user',JSON.stringify(nextState));
        }

    setLoggedInUserTypeToAdmin=()=>{

        this.setState({loggedInUserType:"admin"})

    }
    setLoggedInUserTypeToNormal=()=>{
        this.setState({loggedInUserType:"normal"})
      }
    render() {


        return(

        <React.Fragment>
            <NavBar  setLoggedInUserTypeToNormal={this.setLoggedInUserTypeToNormal}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={()=><Login setLoggedInUserTypeToAdmin={this.setLoggedInUserTypeToAdmin}/>}/>
                <Route exact path="/tours" component={()=><TourList userType={this.state.loggedInUserType} />}/>
                <Route exact path="/manage-tours" component={()=><NewTourItem userType={this.state.loggedInUserType} />}/>

            </Switch>

        </React.Fragment>
        );
    }
}
export default App;