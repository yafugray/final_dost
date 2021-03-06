import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Shiba from 'images/profile.png';
import EditIcon from 'images/edit.png';

const Container = styled.div`
    
    display:flex; 
    // justify-content:center;
    align-items:start;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
    .Avatar{
        display:flex;
        align-items:end;
    }
    margin-bottom:24px;

`;
const ProfilePicture = styled.div`
    width:${props=>props.width ? props.width : "125px"}; 
    height:${props=>props.height ? props.height : "125px"};
    border-radius:50%;
    // border:1px solid red;
    display:flex;
    background-color:#c4c4c4;
    // background:${props=>props.profilepic ? props.profilepic : "125px"}
    background-image: url(${props=>props.profilepic ? props.profilepic : Shiba});
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
const TextsDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:12px;
`;
const TextName = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "24px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#000000"};
`;


const Profile = ({name, width, height, bgcolor, profilepic, ftcolor,ftsize,text1,text2}) => {

    return <Container >
      <div className="Avatar">
        <ProfilePicture profilepic={profilepic}/>
        <Editbutton />
      </div>
      <TextsDiv>
          <TextName ftsize={ftsize}>{text1}</TextName>
          <TextName ftcolor="#303030" ftsize="20px">@{text2}</TextName>
      </TextsDiv>

    </Container>
}

Profile.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:null,
    text1:"Shiba Joah",
    text2:"hibajoah",

}

export default Profile;