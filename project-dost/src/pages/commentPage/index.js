import React, {useState, useEffect} from 'react';
import Profile from 'comps/profile';
import Avatar from 'comps/avatar';
import Timeline from 'comps/timeline';
import OButton from 'comps/button/Orange';
import GButton from 'comps/button/Grey';
import Input from 'comps/input';
import Description from 'comps/description';
import Logout from 'comps/logout';
import NavBar from 'comps/navBar';
import CommentForm from 'comps/commentform';
import ProfileComment from 'comps/profilecomment';
import Posting from 'comps/posting';
import CommentProfile from 'comps/CommentProfile';
import styled from 'styled-components';


const Space = styled.div`
position:fixed;
bottom:90px;
`;

const CommentPage = () => {

    return <div className="all">
        {/* <Profile />
        <Timeline />  */}
         <NavBar />
         <div className="spacingtopcomment">
        {/* <CommentForm />
        <Description />
        <OButton />
        <GButton />
        <Logout />
        <Input /> */}
        <ProfileComment />
        <CommentProfile />
    <Space>
        <Posting />
    </Space>
        </div>
        {/* <Avatar /> */}
    </div>
}

export default CommentPage;