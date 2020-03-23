import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'

import { getBestSeller, getCraftsProd, getArtsProd} from '../../../services/index'
import {addToCart, addToWishlist, addToCompare} from "../../../actions/index";
import ProductItem from './product-item';

class SpecialProducts extends Component {
    render (){

        const {bestSeller,craftS,artS, symbol, addToCart, addToWishlist, addToCompare} = this.props
        return (
            <div>
                <div className="title1 section-t-space">
                    <h4>exclusive products</h4>
                    <h2 className="title-inner1">special products</h2>
                </div>
                <section className="section-b-space p-t-0">
                    <div className="container">
                        <Tabs className="theme-tab">
                            <TabList className="tabs tab-title">
                                <Tab>New Products</Tab>
                                <Tab>Handicrafts</Tab>
                                <Tab>Fine Arts</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="no-slider row">
                                    { bestSeller.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="no-slider row">
                                    { craftS.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className=" no-slider row">
                                    { artS.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bestSeller: getBestSeller(state.data.products),
    craftS: getCraftsProd(state.data.products),
    artS: getArtsProd(state.data.products),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (SpecialProducts);