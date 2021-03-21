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

const LoginPage = () => {



    return <LoginPageBox>

        <Link to="/"><Back src={BackArrow}/></Link>
        <MainCont>
            <Logo src={LogoImg}></Logo>
            <Name>DOST</Name>
            <Input type="text" placeholder="Email"  />
            <Input type="password" placeholder="Password" />
            <ButtonBox>
                <Link to="/main"><Button text={"Login"}></Button></Link>
            </ButtonBox>
        </MainCont>
    </LoginPageBox>
  }

  export default LoginPage;