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
import FeedPost from 'comps/feedPost';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


  
const MainBox = styled.div`
 margin:0;
`;

const Feed = styled.div`
  height:79vh;
  margin-top:13vh;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  max-width:100%;
`;

const dogs = [
    {
        id:1,
        imgurl:"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
    {
        id:2,
        imgurl:"https://www.thesprucepets.com/thmb/wpN_ZunUaRQAc_WRdAQRxeTbyoc=/4231x2820/filters:fill(auto,1)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
    },
    {
        id:1,
        imgurl:"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
    {
        id:1,
        imgurl:"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
    {
        id:1,
        imgurl:"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
    {
        id:1,
        imgurl:"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
    {
        id:1,
        imgurl:"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
]

const Main = () => {

    return <MainBox>
        <NavBar />

        <Feed>
            {dogs.map(o=>{
                return <FeedPost imgurl={o.imgurl}></FeedPost>
            })}
        </Feed>
    {/* <Router>
        <div className="App">
            
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
        </Router> */}

    </MainBox>
}

export default Main;