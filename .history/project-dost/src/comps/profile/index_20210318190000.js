import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import shiba from 'images/profile.png';

const Container = styled.div`
    width:${props=>props.width ? props.width : "125px"}; 
    height:${props=>props.height ? props.height : "125px"};
    border-radius:50%;
    border:1px solid red;
    display:flex;
    flex-direction:column;    
    padding:10px;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
    & > span {
        margin:5px;
    }
`;

const Profile = ({name, width, height, bgcolor}) => {

    return <Container >
      stupid Chuck
    </Container>
}

Profile.defaultProps = {
    width:null,
    height:null,
    bgcolor:null

}

export default Profile;