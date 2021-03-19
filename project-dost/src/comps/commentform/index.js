import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}

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



const CommentForm = ({name, width, height, bgcolor, buttonactive, Mainpic, profilename, profilepic,ftcolor,ftsize,date, likes, bodytext}) => {

    return <Container >
      <TextsDiv>
          <TextName ftcolor="rgba(0, 0, 0, 0.65)">{date}</TextName>
          <TextName ftcolor="#EF5217" ftsize="17px">{likes} likes </TextName>
          <TextName ftcolor="#303030">#{bodytext}</TextName>
      </TextsDiv>

    </Container>
}

CommentForm.defaultProps = {
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

export default CommentForm;