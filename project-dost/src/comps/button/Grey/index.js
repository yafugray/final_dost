import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.button`
    max-width: 262px;
    min-height: 69px;
    font-size: 18pt;
    color: white;
    background-color: #C4C4C4;
    border-radius: 10px;  
    border-style: none;
    margin: 20px;
`;

const GButton = ({onClick, text}) =>{
    return <Container 
        onClick={onClick}>{text}</Container>
}

GButton.defaultProps = {
    text: "",
    onClick:()=>{}
}

export default GButton;