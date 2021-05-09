import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from '../src/components/about-us';
import FaQ from '../src/components/faq';
import {Productprovider} from '../src/components/context';
import {AuthProvider} from '../src/Context/userContext';
import ProductsList from '../src/components/ProductsList';
import ProductDetailsPage from '../src/components/ProductDetailsPage';
import Cart from '../src/components/Cart';
import CheckOut from '../src/components/checkout';
import Login from '../src/components/login';
import PlaceOrder from '../src/components/PlaceOrder';
import OrderComplete from '../src/components/OrderComplete';
import Category from '../src/components/category';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloClient,InMemoryCache,HttpLink,from,ApolloProvider} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {createUploadLink} from 'apollo-upload-client'


const link = from([
 createUploadLink(
    {
      uri:'http://182.160.118.196:82/graphql',
      headers:{ 'Content-Type': 'application/json'}
    }
    )
])

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link,
})

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ApolloProvider client={client}>
      
    <Productprovider>
      <AuthProvider>
    <Router>
          <Switch>
            <Route path="/" exact component={App}></Route>
            <Route path="/about-us" exact component={AboutUs}></Route>
            <Route path="/faq" exact component={FaQ}></Route>
            {/* <Route path="/products" exact component={Products}></Route> */}
            {/* <Productprovider> */}
            <Route path="/products" exact component={ProductsList}></Route>
            <Route path="/category/:slug" exact component={Category}></Route>
            <Route path="/product/:slug" exact component={ProductDetailsPage}></Route>
            <Route path="/cart" exact component={Cart}></Route> 
            {/* </Productprovider> */}
            <Route path="/checkout" exact component={CheckOut}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/placeorder" exact component={PlaceOrder}></Route>
            <Route path="/completeorder" exact component={OrderComplete}></Route>
          </Switch>
      </Router>
      </AuthProvider>
      </Productprovider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
