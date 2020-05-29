import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CreateTripPage from './CreateTripPage';
import ListTripsPage from './ListTripsPage';
import TripDetailsPage from './TripDetailsPage';
import ApplicationFormPage from './ApplicationFormPage';

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/application-form">
                <ApplicationFormPage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/trips/list">
                <ListTripsPage/>
            </Route>
            <Route exact path="/trips/create">
                <CreateTripPage/>
            </Route>
            <Route exact path="/trips/details/:id">
                <TripDetailsPage/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;