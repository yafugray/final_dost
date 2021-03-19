import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Shiba from 'images/profile.png';
import EditIcon from 'images/edit.png';

const Container = styled.div`
    
    display:flex;
    align-items:end; 
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}

`;
const ProfilePicture = styled.div`
    width:${props=>props.width ? props.width : "125px"}; 
    height:${props=>props.height ? props.height : "125px"};
    border-radius:50%;
    // border:1px solid red;
    display:flex;
    background-color:#c4c4c4;
    // background:${props=>props.profilepic ? props.profilepic : "125px"}
    background-image: url(${props=>props.profilepic ? props.profilepic : "none"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
const Editbutton = styled.div`
    background-image: url(${EditIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 32px;
    height: 32px;
    &:hover{
        cursor:pointer;
    }
    margin-bottom:12px;
    margin-left:-4px;

`;

const Profile = ({name, width, height, bgcolor, profilepic}) => {

    return <Container >
      <div>
        <ProfilePicture profilepic={profilepic}/>
      </div>
      <div>
        <Editbutton />
      </div>
    </Container>
}

Profile.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:Shiba,

}

export default Profile;