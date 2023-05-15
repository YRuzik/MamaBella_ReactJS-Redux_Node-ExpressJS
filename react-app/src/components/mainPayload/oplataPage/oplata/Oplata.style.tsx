import styled from "styled-components";
import {ErrorMessage, Field} from "formik";
import {ButtonBack} from "../../../adminPayload/userByID/UserByID.style";

export const OplataContainer = styled.div`
  color: white;
  padding: 1rem;
  border: 2px solid orange;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,.15);
`

export const OplataTitle = styled.div`
  
`

export const OplataBody = styled.div`
  display: flex;
`

export const OplataProducts = styled.div`
  padding-top: 1rem;
  max-height: 35rem;
  overflow: hidden;
  overflow-y: auto;
`

export const OplataReqvisits = styled.div`
    padding: 1rem;
  width: 50%;
`

export const OplataFieldLabel = styled.div`
  text-align: start;
  padding-bottom: 0.5rem;
`

export const OplataMinFields = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const OplataField = styled(Field)`
  border-radius: 50px;
  border: none;
  padding: 0.5rem;
  width: 100%;
  background: none;
  border: 2px solid orange;
  outline: none;
  color: white;
  transition: .2s;
  
  &:focus {
    border-color: orangered;
  }
`

export const OplataFieldSelect = styled(Field)`
    width: 100%;
  border: 2px solid orange;
  border-radius: 50px;
  background-color: transparent;
  color: white;
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  
  &:focus {
    border-color: orangered;
  }
`

export const OplataError = styled(ErrorMessage)`
  color: red;
  width: 100%;
  margin: 0 auto;
`

export const SharedSumAndBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const OplataButtonStyle = styled(ButtonBack)`
  background-color: orange;
  box-shadow: 0 10px 0px darkorange;

  &:hover {
    background-color: #e19500;
    box-shadow: 0 0 0px darkorange;
    transform: translateY(10px);
  }
  
  &:disabled {
    background-color: lightgray;
    box-shadow: 0 10px 0px gray;
    color: gray;
    cursor: not-allowed;

    &:hover {
      background-color:lightgray;
      color: gray;
      box-shadow: 0 10px 0px gray;
      transform: translateY(0);
    }
    
  }
`
