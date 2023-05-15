import styled from "styled-components";
import {Link} from "react-router-dom";

export const ModalAuthContainer = styled.div`
  background: white;
  width: 40%;
  height: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000000000;
  position: absolute;
  border-radius: 20px;
  display: flex;
`

export const ModalAuthSlidingContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 40%;
  background: linear-gradient(125deg, rgba(208,114,0,1) 0%, rgba(255,140,0,1) 100%);;
  border-radius: 20px;
  flex-direction: column!important;
  align-items: center!important;
  display: inline-flex;
  justify-content: center;
  transition: transform 1s ease-in-out;
  transform: ${(props: {xPosition: number}) => `translateX(${props.xPosition}%)`};
  animation: slide-to-left 1s;
  z-index: 1000000000000;
  
  @keyframes slide-to-left {
    from {
      transform: translateX(100%);
    } to {
      transform: translateX(0);
      }
  }
`

export const ModalAuthSlidingTitle = styled.div`
  user-select: none;
  display: flex;
  height: 20%;
  vertical-align: center;
`

export const ModalAuthSlidingButton = styled.button`
  border: none;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 50px;
  color: darkorange;
  background-color: white;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  
  &:hover {
    opacity: 0.9;
  }
`

export const ModalAuthVKButton = styled(Link)`
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
  background-color: mediumslateblue;
  transition: opacity 0.2s ease-in-out;
  vertical-align: center;
  line-height: 1.5rem;

  &:hover {
    opacity: 0.9;
  }
`
