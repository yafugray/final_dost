import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CommentForm from 'comps/commentform';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
`;
const PostBar = styled.div`
    width:${props=>props.width ? props.width : "414px"}; 
    height:${props=>props.height ? props.height : "36px"};
    border:1px solid red;
    display:flex;
    background-color:#EF5217;
    color:"#ffffff";
    align-items:center;
`;
const TextName = styled.div`
    font-size:${props=>props.ftsize ? props.ftsize : "20px"};
    color:${props=>props.ftcolor ? props.ftcolor : "#ffffff"};
    font-weight:700;
    margin-left:4px;
`;
const PostedImgDiv = styled.div`
    width:${props=>props.width ? props.width : "414px"};
    height: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    grid-auto-rows: minmax(100px, auto);

`;


const Post = ({name, width, height, bgcolor, Mainpic,date, likes, bodytext, like}) => {

    const [liked, setLiked] = useState(false);

    useEffect(()=>{
        setLiked(like);
    },[like])

    return <Container >
    <PostBar>
        <TextName>Post</TextName>
    </PostBar>

      <div className="CommentForm">
          <CommentForm />
      </div>

    </Container>
}

Post.defaultProps = {
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

export default Post;