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
const TextName = styled.input`
    font-size:${props=>props.ftsize ? props.ftsize : "13px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#000000"};
    margin-bottom:2px;
    border:none;
`;



const CommentForm = ({width, height, bgcolor}) => {

    return <Container >
      <TextsDiv>
          <TextName action="/posts/{{post._id}}/comments" method="post" placeholder="Add the comment..."/>
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