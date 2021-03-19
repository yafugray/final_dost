import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Shiba from 'images/profile.png';
import Avatar from 'comps/avatar';
import Husky from 'images/mainpic.png';
import HuskyAvater from 'images/huskyavatar.png';
import LikeDefault from 'images/like_button.png';
import CommentButton from 'images/comment_button.png';
import LikeActive from 'images/active_like button.png';
import CommentForm from 'comps/commentform';

const Container = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;

    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}

`;
const MainPicture = styled.div`
    width:${props=>props.width ? props.width : "414px"}; 
    height:${props=>props.height ? props.height : "414px"};
    // border:1px solid red;
    display:flex;
    background-color:#c4c4c4;
    background-image: url(${props=>props.Mainpic ? props.Mainpic : Husky});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    
`;
const ButtonCont = styled.div`
    display:flex;
    align-items:center;
    margin-top:7px;
    &:hover{
        cursor:pointer;
    }

`;

const LikeButton = styled.div`
    width: 31px;
    height: 33px;
    background-image: url(${props=>props.buttonactive ? LikeActive : LikeDefault});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right:8px;
`;

const CommentBtn = styled.div`
    width: 31px;
    height: 29px;
    background-image: url(${CommentButton});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const TextsDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:23px;
`;
const TextName = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "13px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#000000"};
    margin-bottom:2px;
`;



const Timeline = ({name, width, height, bgcolor, buttonactive, Mainpic, profilename, profilepic,ftcolor,ftsize,date, likes, bodytext}) => {

    return <Container >
      <div className="Avatar">
        <Avatar profilepic={HuskyAvater} profilename="HskReed"/>
      </div>
      <div>
          <MainPicture Mainpic={Mainpic}/>
      </div>
      <ButtonCont>
          <LikeButton onClick={()=>("")} buttonactive={buttonactive} />
          <CommentBtn />
      </ButtonCont>
      <TextsDiv>
          <TextName ftcolor="rgba(0, 0, 0, 0.65)">{date}</TextName>
          <TextName ftcolor="#EF5217" ftsize="17px">{likes} likes </TextName>
          <TextName ftcolor="#303030">#{bodytext}</TextName>
      </TextsDiv>

      <div className="CommentForm">
          <CommentForm />
      </div>

    </Container>
}

Timeline.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:null,
    profilename:"ShibaJoah",
    Mainpic:null,
    date:"Feb 14, 2021",
    likes: "162",
    bodytext:"TBT Can't believe I was so small!"
}

export default Timeline;