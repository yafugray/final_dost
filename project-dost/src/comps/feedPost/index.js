import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width:50vw;
  height:50vw;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Imgurl = styled.img`
    width:49vw;
    height:49vw;
    object-fit:cover;
    border:solid 1px lightgrey;
    justify-content:flex-start;
`;


//must at least have these props
const FeedPost = ({author, country, imgurl, language, link, pages, title, year}) => {
  return <Container>
    <div>
      <Imgurl src={imgurl}></Imgurl>
    </div>
    {/* <div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{language}</div>
      <a href={link}>{link}</a>
      <div>{pages} Pages</div>
      <div>{country}</div>
      <div>Published in {year}</div>
    </div> */}

  </Container>
}

FeedPost.defaultProps = {

}

export default FeedPost;