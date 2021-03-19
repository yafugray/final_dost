import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const Container = styled.div`
    min-width:${props=>props.width ? props.width : "300px"};
    min-height:${props=>props.height ? props.height : "100px"};
    max-width:${props=>props.width ? props.width : "50%"}; 
    max-height:${props=>props.height ? props.height : "300px"};
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