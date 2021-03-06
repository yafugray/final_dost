import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 372px;
//   min-height: 294px;
//   background-color: #E5E5E5;
//   border-style: none;
//   border-radius: 10px;
//   margin-bottom: 10px;
//   padding: 0px 8px 0px 8px;

//   `;

  const InputCont = styled.input`
  color: #9C9C9C;
  background-color:#E5E5E5;
  border-style: none;
  min-width: 350px;
  min-height: 400px;
  background-color: #E5E5E5;
  border-style: none;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0px 8px 0px 8px;
  justify-content:center;
  align-items:center;
  align-content:center;



// height: 293.5089111328125px;
// width: 372px;
// left: 41px;
// top: 418px;
// border-radius: 10px;

  `;

const Description = ({onChange, placeholder}) => {

  return <InputCont placeholder="Description" onChange={onChange}>
  </InputCont>
}

Description.defaultProps = {

//   placeholder:"",
  onChange:()=>{} 
}

export default Description;