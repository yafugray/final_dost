import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LikeDefault from 'images/like_button.png';
import CommentButton from 'images/comment_button.png';
import LikeActive from 'images/active_like_button.png';

const Container = styled.div`
    
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    align-items:center;
    margin-top:7px;
    &:hover{
        cursor:pointer;
    }
`;


const LikeButton = styled.div`
    display: ${props=>props.display ? props.display : "flex"};
    width: 31px;
    height: 33px;
    background-image: url(${props=>props.activated ? LikeActive :LikeDefault});
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



const Buttons = ({active}) => {

    const [activated, setActivated] = useState(false);

    useEffect(()=>{
        setActivated(active);
    },[active])

    return <Container >

          <LikeButton onClick={()=>(
              setActivated(!activated)
          )} activated={activated}/>

          <CommentBtn />

    </Container>
}

Buttons.defaultProps = {
    width:null,
    height:null,
    bgcolor:null,
    profilepic:null,
    profilename:"ShibaJoah",
    Mainpic:null,
    date:"Feb 14, 2021",
    likes: "162",
    bodytext:"TBT Can't believe I was so small!",
    like:false,
}

export default Buttons;