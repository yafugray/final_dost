import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Shiba from 'images/profile.png';
import EditIcon from 'images/edit.png';
import Husky from 'images/huskyavatar.png'
import CommentForm from 'comps/commentform';
import BlackDog from 'images/BlackDog.png';

const Container = styled.div`
    
    display:flex; 
    align-items:center;
    // justify-content:center;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
    margin-bottom:8px;

`;
const ProfilePicture = styled.div`
    width:${props=>props.width ? props.width : "48px"}; 
    height:${props=>props.height ? props.height : "48px"};
    border-radius:50%;
    // border:1px solid red;
    display:flex;
    background-color:#c4c4c4;
    // background:${props=>props.profilepic ? props.profilepic : "125px"}
    background-image: url(${props=>props.profilepic ? props.profilepic : BlackDog});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const TextsDiv = styled.div`
    display:flex;
    margin-left:12px;
    align-items: center;
`;
const TextName = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "18px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#EF5217"};
    font-weight: bold;
`;

const TextDay = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "12px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#8E8E8F"};
    font-weight: bold;
    margin-left:8px;
`;

const TextComment = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "12px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#535358"};
    font-weight: bold;
`;
const CommentProfile = ({name, width, height, bgcolor,comment, date, profilename, profilepic,ftcolor,ftsize,text1,text2}) => {

    return <Container >
      <div className="Avatar">
        <ProfilePicture profilepic={profilepic}/>
      </div>
      <div>
      <TextsDiv>
          <TextName ftsize={ftsize}>{profilename}</TextName>
          <TextDay>{date} ago</TextDay>
      </TextsDiv>
      <TextsDiv>
          <TextComment>{comment}</TextComment>
      </TextsDiv>
      </div>

    </Container>
}

CommentProfile.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:null,
    profilename:"Peeky",
    date:"4 days",
    comment:"Fire Post!!!!!><",
}

export default CommentProfile;