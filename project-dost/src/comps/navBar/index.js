import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from 'comps/header';
import Home from 'images/home.png';
import HomeActive from 'images/homeActive.png';
import Post from 'images/post.png';
import PostActive from 'images/postActive.png';
import ProfileIcon from 'images/profileIcon.png';
import ProfileIconActive from 'images/profileIconActive.png'

import {useLocation, Link, useHistory} from 'react-router-dom';

const NavBarBox = styled.div`

`;

const HomeButton = styled.button`
    width:32vw;
    height:7vh;
    background-color:#252528;
    border-radius:5px;
    margin:3px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image: url(${props=>props.HomeActivated ? HomeActive :Home});
    background-size: 33px 33px;
    background-repeat: no-repeat;
    background-position: center;
`;

const PostButton = styled.button`
    width:32vw;
    height:7vh;
    background-color:#252528;
    border-radius:5px;
    margin:3px 0;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image: url(${props=>props.PostActivated ? PostActive :Post});
    background-size: 33px 33px;
    background-repeat: no-repeat;
    background-position: center;
`;

const ProfileButton = styled.button`
    width:32vw;
    height:7vh;
    background-color:#252528;
    border-radius:5px;
    margin:3px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image: url(${props=>props.ProfileIconActivated ? ProfileIconActive :ProfileIcon});
    background-size: 33px 33px;
    background-repeat: no-repeat;
    background-position: center;
`;

const TopNavBar = styled.div`
    position:fixed;
    top:0;
`;

const BotNavBar = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    height:8vh;
    background-color:#535358;
    display:flex;
    justify-content:space-around;
`;

const HomeImg = styled.div`
   
`;

const PostImg = styled.div`

`;

const ProfileImg = styled.div`

`;


const NavBar = ({HomeActive, PostActive, ProfileIconActive}) => {

    const [HomeActivated, setHomeActivated] = useState(false);
    const [PostActivated, setPostActivated] = useState(false);
    const [ProfileIconActivated, setProfileIconActivated] = useState(false);

    useEffect(()=>{
        setHomeActivated(HomeActive);
    },[])
    useEffect(()=>{
        setHomeActivated(HomeActive);
    },[HomeActive])
    useEffect(()=>{
        setPostActivated(PostActive);
    },[PostActive])
    useEffect(()=>{
        setProfileIconActivated(ProfileIconActive);
    },[ProfileIconActive])



    return <NavBarBox>
        <TopNavBar>
            <Header />
        </TopNavBar>

        <BotNavBar>
            <Link to="/main">
                <HomeButton onClick={()=>( setHomeActivated(!HomeActivated), setPostActivated(false), setProfileIconActivated(false))} HomeActivated={HomeActivated}>
                    <HomeImg />
                </HomeButton>
            </Link>
   
            <Link to="/upload" >
                <PostButton onClick={()=>( setPostActivated(!PostActivated), setHomeActivated(false), setProfileIconActivated(false))} PostActivated={PostActivated}>
                    <PostImg />
                </PostButton>
            </Link>

            <Link>
                <ProfileButton onClick={()=>( setProfileIconActivated(!ProfileIconActivated), setPostActivated(false), setHomeActivated(false))} ProfileIconActivated={ProfileIconActivated}>
                    <ProfileImg />
                </ProfileButton>
            </Link>
            
        </BotNavBar>

    </NavBarBox>
};

NavBar.defaultProps = {

};

export default NavBar;