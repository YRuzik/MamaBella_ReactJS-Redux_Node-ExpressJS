import styled from "styled-components";
import {Field} from "formik";

export const PBI = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  border: 1px solid rgba(114, 77, 169, 0.32);
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,.25);
  min-height: 45rem;
`

export const PBIThumbnail = styled.div`
`

export const PBIInputLabel = styled.div`
    text-align: start;
  color: lightgray;
  padding-top: 2rem;
`

export const PBIInput = styled(Field)`
  border: none;
  border-bottom: 2px solid gray;
  background-color: transparent;
  width: 90%;
  line-height: 3rem;
  font-size: 150%;
  color: white;
  outline: none;
  transition: .2s ease;
  
  &:focus {
    border-bottom-color: cornflowerblue;
  }
  
  &:disabled {
    color: gray;
  }
`

export const PBIChangeButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: rgb(215, 164, 0);
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  box-shadow: 0 10px 0px rgb(190, 148, 0);

  &:hover {
    background-color: rgba(215, 164, 0, 0.9);
    box-shadow: 0 0 0px rgba(190, 148, 0, 0.5);
    transform: translateY(10px);
  }
`

export const PBISaveButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: rgb(86, 215, 0);
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  box-shadow: 0 10px 0px rgb(41, 190, 0);

  &:hover {
    background-color: rgba(86, 215, 0, 0.9);
    box-shadow: 0 0 0px rgba(41, 190, 0, 0.5);
    transform: translateY(10px);
  }
`
