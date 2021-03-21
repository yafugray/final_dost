import React from 'react';
import styled from 'styled-components';
import back from 'images/back.png';
import forward from 'images/forward.png';
import logo from 'images/logo.png';

const Header_box = styled.div`
    padding-top:25px;
    width: 100vw;
    height:10vh;
    display:flex;
    background-color: #fafafa;
`;

const BackArrow = styled.img`
    padding:20px;
`;

const Logo = styled.img`
    padding:5px;
    margin-left:auto;
    margin-right:auto;
`;

const BackArrow2 = styled.img`
    visibility: hidden;
    padding:20px;
    
`;

const Divider = styled.div`
    width:100%;
    height:1px;
    background-color:#C4C4C4;
`;

const Header = ({ visibility }) => {
    return <div>
        <Header_box>
            <BackArrow src={back}></BackArrow>
            <Logo src={logo}></Logo>
            <BackArrow2 src={forward}></BackArrow2>
        </Header_box>
        <Divider></Divider>
    </div>
}

Header.defaultProps = {
}

export default Header;