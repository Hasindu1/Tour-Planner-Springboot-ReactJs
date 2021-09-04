import React, {Component} from 'react';
import './NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus, faSignInAlt, faPlane,faTshirt,faSearch,faShoppingCart,faPhoneSquareAlt,faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

class NavBar extends Component{
    constructor(props) {
        super(props);

    }
    logOut =()=>{
        this.props.setLoggedInUserTypeToNormal();
        Swal.fire({
            title: 'Logged Out Successfully',
            text: 'You have Logged out from the profile successfully',
            icon: 'success',

            confirmButtonText: 'OK',

        });
    }
    handleScroll = ()=> {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
    render() {
        return(
              <React.Fragment>
                  <div className="container-fluid ">

                  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light row">
                      <div className="col-md-6 col-lg-4 pl-5">
                      <a className="navbar-brand" href="/"><FontAwesomeIcon className="mr-2" icon={faPlane}/>Tour Planner</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                              aria-expanded="false" aria-label="Toggle navigation" >
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      </div>

                      <div className="collapse navbar-collapse col-lg-4" id="navbarTogglerDemo02">
                          <ul className="navbar-nav mt-2 mt-lg-0">
                              <li className="nav-item active px-4 text-center">
                                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item px-4 text-center">
                                  <a className="nav-link" href="/tours">Tours</a>
                              </li>
                              <li className="nav-item px-4 text-center">
                                  <a className="nav-link contact-us-link" onClick={()=>{this.handleScroll()}}>ContactUs</a>
                              </li>

                          </ul>

                      </div>

                      <div className="collapse navbar-collapse ml-lg-5" id="navbarTogglerDemo02">
                          <ul className="navbar-nav mt-2 mt-lg-0">
                              <li className="nav-item active px-2 text-center">
                                  <Link to="/login"><button className="btn nav-style nav-login "><FontAwesomeIcon className="mr-2" icon={faUserPlus}/>Login</button></Link>
                              </li>
                              <li className="nav-item px-2 text-center">
                                  <Link to="/login"><button className="btn nav-style nav-logout" onClick={()=>{this.logOut()}}><FontAwesomeIcon className="mr-2" icon={faSignInAlt}/>Logout</button> </Link>

                              </li>

                          </ul>

                      </div>
                  </nav>

                  </div>
              </React.Fragment>
        );
    }

}
export default NavBar;