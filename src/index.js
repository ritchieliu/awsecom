// This is define the addon pages router


import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Amplify, { Analytics } from 'aws-amplify'
import * as serviceWorker from './serviceWorker';

import AppProvider from './context/AppProvider'

// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import App from './App';
import Product from './pages/Product'
//RL add 
import Product_Remove from './pages/Product_Remove'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
//
import Checkout from './pages/Checkout'
import PlacedOrder from './pages/PlacedOrder'
import About from './pages/About'

import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

Analytics.record('Store_Load');
        
Analytics.autoTrack('pageView', {
    enable: true,
    type: 'SPA'
})
//<Route path="/ordercomplete" component={PlacedOrder}/>
const routing = (
    <AppProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/product/:id" component={Product} />
                
                <Route path="/product_remove/:id" component={Product_Remove} />
                <Route path="/payment/:amount" component={Payment} />
                <Route path="/paymentsuccess/" component={PaymentSuccess} />
                <Route path="/about/" component={About} />


                <Route path="/checkout" component={Checkout} />
                <Route path="/PlacedOrder/:totalPurchase" component={PlacedOrder}/>
                <Route component={App} />
            </Switch>
        </Router>
    </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
