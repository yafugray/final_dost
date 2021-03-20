import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.button`
    max-width: 262px;
    min-height: 69px;
    font-size: 18pt;
    color: white;
    background-color: #EF5217;
    border-radius: 10px;  
    border-style: none;
    margin: 20px;
`;

const OButton = ({onClick, text}) =>{
    return <Container 
        onClick={onClick}>{text}</Container>
}

OButton.defaultProps = {
    text: "",
    onClick:()=>{}
}

export default OButton;