import React, { Component } from 'react';
import Product from './Product'
import {ProductConsumer} from '../Context';
import Title from './Title';
import CarouselStrap from './CarouselStrap';
import Footer from './Footer';

export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                < CarouselStrap />
                <div className="py-5">
                    <div className="container">
                        <Title name="popular" title="destinations"/>
                        <p className="text-center">The Land of God. A destination for all seasons and all seasons.</p>
                        <div className="row">
                            <ProductConsumer>
                                {value => { 
                                   return value.product.map(product => {
                                        return <Product key={product.id} product={product} />
                                   })
                                    }}
                            </ProductConsumer>

                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
