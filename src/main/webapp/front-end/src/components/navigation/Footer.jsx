import React from 'react';
import './Footer.css';

const Footer =(props)=>{
    return(
        <a id="section-footer">
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Tour Planner</h3>
                            <p>
                                A108 Church Street <br/>
                                Battaramulla, Sri Lanka<br/><br/>
                                <strong>Phone:</strong> +94 76 708 1452<br/>
                                <strong>Email:</strong> info@usero.com<br/>
                            </p>

                        </div>


                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Manage your company user details instantly with us</p>
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                            </form>

                        </div>

                    </div>
                </div>
            </div>


        </footer>
        </a>
    );
}
export default Footer;