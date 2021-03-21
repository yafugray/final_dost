import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Profile from 'comps/profile';
import Timeline from 'comps/timeline';
import OButton from 'comps/button/Orange';
import GButton from 'comps/button/Grey';
import Input from 'comps/input';
import Description from 'comps/description';
import Logout from 'comps/logout';

import NavBar from 'comps/navBar';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


  
const MainBox = styled.div`
 margin:0;
`;

const Main = () => {

    return <MainBox>

    <Router>
        <div className="App">
            <NavBar />
            <Switch>
            <Route exact path="/">
                <Timeline />
            </Route>
            <Route exact path="/">

            </Route>
            <Route exact path="/">
            </Route>
            </Switch>
        </div>
        </Router>

    </MainBox>
}

export default Main;