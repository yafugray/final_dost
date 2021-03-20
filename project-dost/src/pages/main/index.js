import React, {useState, useEffect} from 'react';
import Profile from 'comps/profile';
import Avatar from 'comps/avatar';
import Timeline from 'comps/timeline';
import OButton from 'comps/button/Orange';
import GButton from 'comps/button/Grey';
import Input from 'comps/input';
import Description from 'comps/description';
import Logout from 'comps/logout';


const Main = () => {

    return <div className="main">
        {/* <Profile />
        <Timeline /> */}
        <Description />
        <OButton />
        <GButton />
        <Logout />
        <Input />
    </div>
}

export default Main;