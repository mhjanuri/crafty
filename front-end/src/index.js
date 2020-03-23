import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'


// Layouts
import Layout from './components/app'
import Home from './components/layouts/home/main';

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";

// Product Pages
import RightSideBar from "./components/products/right-sidebar";

// Features
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import Login from './components/pages/login'
import Register from './components/pages/register'
import Dashboard from './components/pages/dashboard'
import ForgetPassword from './components/pages/forget-password'
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import Search from './components/pages/search'

// Blog Pages
import BlogPage from './components/blogs/blog-page'


class Root extends React.Component {

    render() {
        store.dispatch(getAllProducts());

        return(
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
                    <BrowserRouter basename={'/'} >
                        <ScrollContext>

                            {/* App Components Start*/}
                            <Layout>
                                <Switch>
                                    
                                    {/*Routes For Home*/}
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>

                                    {/*Routes For Shop (Product Collection) */}
                                    <Route path={`${process.env.PUBLIC_URL}/collection`} component={CollectionLeftSidebar}/>
                                    
                                    {/*Routes For Single Product*/}
                                    <Route path={`${process.env.PUBLIC_URL}/product/:id`} component={RightSideBar}/>
                                    
                                    {/*Routes For Features*/}
                                    <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                    <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
                                    <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
                                    <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
                                    <Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>

                                    {/*Routes For Extra Pages*/}
                                    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                                    <Route path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                                    <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard}/>
                                    <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                    <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs}/>
                                    <Route path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                                    <Route path={`${process.env.PUBLIC_URL}/search`} component={Search} />

                                    {/*Blog Pages*/}
                                    <Route path={`${process.env.PUBLIC_URL}/blog`} component={BlogPage}/>

                                    {/* 404 Page */}
                                    <Route path='/*' component={PageNotFound} />
                                </Switch>
                            </Layout>
                            {/* App Components End*/}

				        </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));


