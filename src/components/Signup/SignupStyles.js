import React from "react";
import styled from "styled-components";

export const ButtonSign = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #000;
  font-size: 1em;
  text-align: center;
  font-weight: 700;
  margin: auto;
  padding: 1.2em 1em;
  border: 2px solid #fff;
  border-radius: 3px;
  display: block;
  max-width: 50%;
  
  &:hover {
    color: #a4161a;
  }
  
`;


export const Button = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #000;
  font-size: 1em;
  text-align: center;
  font-weight: 700;
  padding: 1.2em 1em;
  border: 2px solid #fff;
  border-radius: 3px;
  display: block;
  max-width: 30%;
  
  &:hover {
    color: #a4161a;
  }
  
`;


export const ForgotPassword = styled.p`
    color: #6c757d;
    font-size: 0.8em;
    text-align: right;
`;

export const Img = styled.img`
    display: flex;
    margin: auto;
    width: 17em;
    padding-bottom: 17em;
`;

export const FormGroup = styled.div`
    display: block;
	width: 80%;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #fff;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: #000;
	background: #fff;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
	box-shadow: 1px 1px 14px #660708;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	padding-bottom : 1em;
	color: #a4161a;
    display: block;
`;
