import React, { Component } from 'react';
import Footer from './Footer';

export default class aboutus extends Component {

    render() {
        
        return (
            
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="img/aboutus.jpg" alt="aboutus"style={{width:"1024px", height:"720px"}} />
                        </div>
                    </div>
                </div>
                <div className="about_story">
                    <div className="container" >
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="story_heading">
                        <h3>Our Story</h3>
                        </div>
                    <div className="row">
                        <div className="col-lg-11 offset-lg-1">
                            <div className="story_info text-muted">
                                <div className="row" >
                                    <div className="col-lg-9">
                                        <p>There are many top reasons to plan a trip to Himachal Pradesh. Its spectacular snow-clad peaks, dense pine forests, roaring rivers and zigzag roads, is a gift from Nature. The various hill stations here are perpetually dressed in a holiday-like atmosphere, while its colonial heritage, a gift from the British Raj, weaves its own charm on the people. Its amazing topography provides immense opportunities for engaging in a diverse range of adventurous opportunities.</p>
                                        <p>In Himachal Pradesh, there is so much to explore, so much to do. Whether it is Shimla, Manali or Dalhousie, every place provides you with a unique experience. What better place then, to head for a holiday? </p>
                                    </div>
                                </div>
                            </div>
                            <div className="story_thumb">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="thumb padd_1">
                                            <img src="img/aboutus1.jpg" alt="" style={{width:"350px", height:"500px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="thumb">
                                            <img src="img/aboutus2.jpg" alt="" style={{width:"450px", height:"400px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container client" >
                                <div className="row">
                                    <div className="four col-md-4">
                                        <div className="counter-box colored"> <i className="fa fa-thumbs-o-up"></i> <span className="counter">2147</span>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                    <div className="four col-md-4">
                                    <div className="counter-box"> <i className="fa fa-group"></i> <span className="counter">130</span>
                                        <p>yearly tour arrange</p>
                                    </div>
                                    </div>
                                    <div className="four col-md-4">
                                    <div className="counter-box"> <i className="fa fa-shopping-cart"></i> <span className="counter">589</span>
                                    <p>has done tour successfully</p>
                                    </div>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
        )
    }
}
