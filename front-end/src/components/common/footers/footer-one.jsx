import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script"
import LogoImage from "../headers/common/logo"

class FooterOne extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render () {

        return (
            <footer className="footer-light">
                <div className="light-layout">
                    <div className="container">
                        <section className="small-section border-section border-top-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subscribe">
                                        <div>
                                            <h4>KNOW IT ALL FIRST!</h4>
                                            <p>Never Miss Anything From Crafty By Signing Up To Our Newsletter. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <form className="form-inline subscribe-form">
                                        <div className="form-group mx-sm-3">
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="Enter your email"/>
                                        </div>
                                        <button type="submit" className="btn btn-solid">subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row footer-theme partition-f">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div className="footer-contant">
                                    <div className="footer-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <p>
                                        Crafty is an e-commerce for highly curated Handicraft and Arts based in Jakarta, Indonesia. 
                                        We are trying to bring the best of Indonesia's finest Handicraft and Arts to global market. 
                                        Please visit our social media pages below, 
                                    </p>
                                    <div className="footer-social">
                                        <ul>
                                            <li>
                                                <a href={'https://www.facebook.com/'} ><i className="fa fa-facebook" aria-hidden="false"></i></a>
                                            </li>
                                            <li>
                                                <a href={'https://twitter.com'}><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href={'https://instagram.com'}><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href={'https://rss.com/'}><i className="fa fa-rss" aria-hidden="true"></i></a>
                                            </li>
                                            {/* <li>
                                                <a href={'https://plus.google.com/'} ><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col offset-xl-1">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>our store</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul className="contact-list">
                                            <li><i className="fa fa-map-marker"></i>
                                                <a href="https://goo.gl/maps/admTSRY3UPa1pjsL6">
                                                Crafty Demo Store Indonesia -
                                                Jl. Jend. Sudirman No.Kav. 21,
                                                Jakarta 12930</a>                                                
                                            </li>
                                            <li><i className="fa fa-phone"></i> Call Us: 0808-8-9999 </li>
                                            <li><i className="fa fa-envelope-o"></i> Email Us: <a href="mailto:mail.crafty.biz@gmail.com?subject=Mail from Our Site">mail.crafty.biz@gmail.com</a></li>
                                            <li><i className="fa fa-fax"></i>Fax: 0808-8-9999 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>why choose us</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li><a href="#">shipping & return</a></li>
                                            <li><a href="#">secure shopping</a></li>
                                            <li><a href="#">gallery</a></li>
                                            <li><a href="#">affiliates</a></li>
                                            <li><a href="#">contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>my account</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li><Link to={`${process.env.PUBLIC_URL}/collection`} >NULL</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/collection`} >NULL</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/collection`} >NULL</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/collection`} >NULL</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sub-footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="footer-end">
                                    <p><i className="fa fa-copyright" aria-hidden="true"></i> 2019-20 Crafty
                                        All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="payment-card-bottom">
                                    <ul>
                                        <li>
                                            <a href="https://usa.visa.com/"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.mastercard.us/en-us.html"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.paypal.com/"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.americanexpress.com/"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                                        </li>
                                        {/* <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterOne;