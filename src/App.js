import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './routes/Home';

const app = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    );
}

export default app;