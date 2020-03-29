import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import Footer from './Footer';

export default class Details extends Component {
    render() {
        return (
            <React.Fragment>
            <ProductConsumer>
                { value => {
                    const {id,company,img,info,price,title,inCart,days}= value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> Place: {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        <span className="text-capitalize">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>₹</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            duration: <span>{days} days</span>
                                            
                                        </strong>
                                    </h4>
                                    <p className="text-capitaize font-weight-bold mt-3 mb-0">
                                        some info about the place:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to homepage
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart
                                        disabled={inCart?true:false}
                                        onClick={() => {value.addToCart(id); value.openModal(id)}}>
                                            {inCart ? "Booked": "add to my booking"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                }
                
            </ProductConsumer>
            <Footer />
            </React.Fragment>
            
        )
    }
}
