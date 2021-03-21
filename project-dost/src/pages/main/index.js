import React, {useState, useEffect} from 'react';
import Profile from 'comps/profile';
import Avatar from 'comps/avatar';
import Post from 'comps/post';
import Timeline from 'comps/timeline';


const Main = () => {

    return <div className="main">
        <Profile />
        <Timeline />
        <Post />
    </div>
}

export default Main;