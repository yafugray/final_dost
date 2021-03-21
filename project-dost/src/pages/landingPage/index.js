import React from 'react';
import styled from 'styled-components';
import LogoImg from 'images/logo.png'
import {useLocation, Link, useHistory} from 'react-router-dom';

const LandingPage_Box = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding-top:10vh;
`;

const Logo = styled.img`
    padding:5px;
    margin-left:auto;
    margin-right:auto;
`;

const Name = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size:80px;
    color:#EF5217;
    margin:15px 0 30px 0;
`;

const Login = styled.button`
    width: 262px;
    height: 69px;
    background-color:#EF5217;
    border:none;
    border-radius:10px;
    color:white;
    font-size:36px;
    margin:20px;
`;

const Signup = styled.button`
    width: 262px;
    height: 69px;
    background-color:#8E8E8E;
    border:none;
    border-radius:10px;
    color:white;
    font-size:36px;
    margin:20px;
`;


const LandingPage = () => {

    const history = useHistory();

    return <LandingPage_Box> 
        <Logo src={LogoImg}></Logo>
        <Name>DOST</Name>

        <Link to="/login"><Login>Login</Login></Link>
        <Link to="/signup"><Signup>Sign Up</Signup></Link>
    </LandingPage_Box>
}

LandingPage.defaultProps = {

}

export default LandingPage;