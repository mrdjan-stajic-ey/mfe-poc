import React from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return (
        <>
            <StylesProvider>
                <h2>Dos</h2>
                <Router>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
}