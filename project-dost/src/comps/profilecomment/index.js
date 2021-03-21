import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Shiba from 'images/profile.png';
import EditIcon from 'images/edit.png';
import Husky from 'images/huskyavatar.png'
import Avatar from 'comps/avatar';

const Container = styled.div`
    
    // display:flex; 
    align-items:center;
    justify-content:center;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
    margin-bottom:8px;
    max-width:100vw;


`;
const ProfilePicture = styled.div`
    width:${props=>props.width ? props.width : "48px"}; 
    height:${props=>props.height ? props.height : "48px"};
    border-radius:50%;
    // border:1px solid red;
    display:flex;
    background-color:#c4c4c4;
    // background:${props=>props.profilepic ? props.profilepic : "125px"}
    background-image: url(${props=>props.profilepic ? props.profilepic : Husky});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const TextsDiv = styled.div`
    display:flex;
    margin-left:12px;
`;
const TextName = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "18px"};
    font-weight:bold;
    color:${props=>props.ftcolor ? props.ftcolor : "#000000"};
`;

const TextComment = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "13px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#000000"};
    margin-bottom:4px;
    padding-top:4px;
`;

const Line = styled.hr`
    border: 1px solid lightgrey;
    width:98vw;
    margin-top:20px;
    justify-content:center;
`
const ProfileComment = ({bodytext,name, width, height, bgcolor, profilename, profilepic,ftcolor,ftsize,text1,text2}) => {

    return <Container >
      <div className="Avatar">
        <Avatar />
      </div>
      {/* <TextsDiv> */}
      <TextComment ftcolor="#303030">#{bodytext}</TextComment>
      {/* </TextsDiv> */}
      <Line />


    </Container>
}

ProfileComment.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:null,
    profilename:"ShibaJoah",
    bodytext:"Cant believe I was so somall",
}

export default ProfileComment;