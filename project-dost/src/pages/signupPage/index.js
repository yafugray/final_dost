import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useHistory, Link } from 'react-router-dom'

import Input from 'comps/input';
import BackArrow from 'images/back-orange.png';
import LogoImg from 'images/logo.png';
import Button from 'comps/button/Orange';

const Back = styled.img`
    position:fixed;
    width:50px;
    margin:13px;
`;

const Logo = styled.img`
    max-width:20%;
    padding:5px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:10px;
`;

const LoginPageBox = styled.div`
`;

const MainCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:10vh
`;

const ButtonBox = styled.div`
    position:fixed;
    bottom: 15px;
`;

const InputBox = styled.div`
    margin:10px;
`;

const SignupPage = () => {



    return <LoginPageBox>

        <Link to="/"><Back src={BackArrow}/></Link>
        <MainCont>
            <Logo src={LogoImg}></Logo>
            <h1>Sign Up</h1>
            <InputBox><Input type="text" placeholder="Username"  /></InputBox>
            <InputBox><Input type="text" placeholder="Email"  /></InputBox>
            
            <InputBox><Input type="password" placeholder="Password" /></InputBox>
            <InputBox><Input type="password" placeholder="Confirm Password" /></InputBox>
            <ButtonBox>
                <Link to="/main"><Button text={"Login"}></Button></Link>
            </ButtonBox>
        </MainCont>
    </LoginPageBox>
  }

  export default SignupPage;