import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const InputCont = styled.input`
  width: 208px;
  height: 47px;
  color: #9C9C9C;
  background-color: #E5E5E5;
  // border: 1px solid #C4C4C4;
  border-style: none;
  border-radius: 10px;
  text-align: left;
  margin: 15px;
  padding: 0px 8px 0px 8px;
  `;

const Input = ({onChange, placeholder}) => {

  return <InputCont 
    placeholder={placeholder} 
    onChange={onChange}>
  </InputCont>
}

Input.defaultProps = {

  placeholder:"",
  onChange:()=>{}
}

export default Input;