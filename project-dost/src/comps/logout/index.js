import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.button`
    max-width: 80px;
    min-height: 36px;
    font-size: 14pt;
    color: white;
    background-color: #EF5217;
    border-radius: 10px;  
    border-style: none;
    margin: 20px;
`;

const Logout = ({onClick, text}) =>{
    return <Container 
        onClick={onClick}>Logout</Container>
}

Logout.defaultProps = {
    onClick:()=>{}
}

export default Logout;