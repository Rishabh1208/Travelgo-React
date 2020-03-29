import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export default function Footer(props) {
    return(
    
    <FooterStyle className="footer" >
        <div className="container">
            <div className="row justify-content-center"> 
                        
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Company</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5><img style={{height:"40px", width:"40px"}} src="img/icon.png" alt="Travel"/>Travelgo</h5>
                    <address>
                    5th flora, 700/D kings road<br />
		              Laxman Zhula<br />
		              Rishikesh<br />
		              <i className="fa fa-phone fa-lg"></i>: +918457745236<br />
		              <i className="fa fa-fax fa-lg"></i>: +91123456789<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         contact@travelgo.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center" >
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fab fa-google-plus-g"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <hr style={{color: "white"}}></hr>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <br></br>
                    <p>Copyright ©2020 All rights reserved</p>
                </div>
            </div>
        </div>
    </FooterStyle>
    
    )
}


const FooterStyle = Styled.div`
background: rgba(11, 19, 55, 1) !important ;
color: var(--mainWhite) !important;
padding-top: 3rem;
hr {
    border-color: white;
}
i {
    color: white;
}

`