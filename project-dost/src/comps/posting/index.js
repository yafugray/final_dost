import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Shiba from 'images/profile.png';
import EditIcon from 'images/edit.png';
import Husky from 'images/huskyavatar.png';
import Input from 'comps/input';
import OButton from 'comps/button/Orange';

const Container = styled.div`
    
    display:flex; 
    align-items:center;
    // justify-content:center;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
    margin-bottom:8px;


`;


const Divide = styled.div`
    
    display:flex; 
    align-items:center;
    // justify-content:center;
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

const ButtonCon = styled.button`
    // width:20px;
    max-height: 47px;
    font-size: 18pt;
    color: white;
    background-color: #EF5217;
    border-radius: 10px;  
    border-style: none;
    // margin: 20px;
    padding:15px 80px;
    text-align: center;
    justify-content:center;
`;

const Posting = ({name, width, height, bgcolor, profilename, profilepic,ftcolor,ftsize,text1,text2}) => {

    return <Container >
      <Divide>
        <ProfilePicture profilepic={profilepic}/>
        <Input type="Comment" placeholder="Comment" />
        <ButtonCon>Post</ButtonCon>
      </Divide>

    </Container>
}

Posting.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:Shiba,
    profilename:"HuskReed",
}

export default Posting;