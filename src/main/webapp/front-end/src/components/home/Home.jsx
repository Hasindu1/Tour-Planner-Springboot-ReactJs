import React, {Component} from 'react';
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import {Link} from "react-router-dom";
import './Home.css';


class Home extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <React.Fragment>

        <div className="container-fluid px-0 main-container">
                <section id="hero">
                    <div className="hero-container">
                        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">


                            <div className="carousel-inner" role="listbox">


                                <div className="carousel-item active img-container"
                                     >
                                    <div className="carousel-container">
                                        <div className="carousel-content container ">
                                            <h2 className="animate__animated animate__fadeInDown">Welcome
                                                to <span>Tour Planner</span></h2>
                                            <p className="animate__animated animate__fadeInUp">
                                                We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open. – Jawaharial Nehru
                                                nka Travel Plan is a customer oriented flexible service that offers the best bespoken luxury tour experience to our customers. There’s no such thing as a package tour with us as we understand that no two experiences are the same because no two requests are ever identical. The following itineraries are simply examples of the types of trips we like to run so have a read, browse by destination or by your specific need and let your wanderlust guide you through our site. And when you have an idea of what you’re looking for, be it vague or intricately specific, get in touch. We’ll do the rest. </p>
                                            <Link to="/tours"
                                               className="btn-get-started animate__animated animate__fadeInUp scrollto">Checkout Packages
                                                </Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </div>

            </React.Fragment>

        );
    }
}
export default Home;