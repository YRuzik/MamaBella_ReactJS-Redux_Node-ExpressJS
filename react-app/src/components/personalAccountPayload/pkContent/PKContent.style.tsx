import styled from "styled-components";

export const PKContainer = styled.div`
  width: 40%;
  display: grid;
  height: 50%;
  
  div {
    padding: 1rem;
  }
`

export const PKItem = styled.div`
  position: relative;
  height: 100%;
  color: #eeedf2;
  font-size: 1.5rem;
  font-weight: 400;
  transition: .2s;
  cursor: pointer;
  text-align: start;
  
  i {
    padding-right: 0.5rem;
  }
  
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,.15);
    background: rgba(0,0,0,.20);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    height: 2px;
    width: 100%;
    transform: scale(0, 1);
    transition: transform 0.4s;
    background: orange;
    transform-origin: right top;
  }
  
  &:hover:after {
    transform: scale(1, 1);
    transform-origin: left top;
  }
`

export const PKUserView = styled.div`
  color: white;
  font-size: 1.5rem;
`

export const PKUserContainer = styled.div`
  display: flex;
  width: 100%;
  
  hr {
    border: none;
    border-top: 2px solid white;
  }
`
