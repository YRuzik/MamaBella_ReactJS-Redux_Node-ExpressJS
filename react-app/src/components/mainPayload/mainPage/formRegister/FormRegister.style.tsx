import styled from "styled-components";
import {ErrorMessage, Field, Form} from "formik";

export const FormContainerSmall = styled.div`
  color: black;
  border-top: 20px solid transparent;
  position: relative;
  text-align: start;
  width: 10vw;
  margin-bottom: 1rem;
`

export const FormContainer = styled.div`
  color: black;
  border-top: 20px solid transparent;
  position: relative;
  text-align: start;
  width: 100%;
  margin-bottom: 1rem;
`

export const FormWrap = styled.div`
  height: 70%;
  display: grid;
  align-items: center;
`

export const FormContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FormLabel = styled.label`
  position: absolute;
  left: 0.75rem;
  transform: translateY(60%);
  font-size: 1rem;
  color: #aaa;
  white-space: nowrap;
  text-overflow: ellipsis;

  transition:
          transform 0.3s ease,
          color 0.3s ease,
          font-size 0.3s ease;
`

export const FormCustom = styled(Form)`
  padding: 2rem;
  position: absolute;
  right: 0;
  text-align: center;
  width: 60%;
  height: 100%;
  animation: slide-to-right 1.5s;

  @keyframes slide-to-right {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    25% {
      transform: translateX(-25%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  h1 {
    padding-bottom: 1rem;
  }
`

export const FormCustomRegister = styled(Form)`
  padding: 2rem;
  position: absolute;
  left: 0;
  text-align: center;
  width: 60%;
  height: 100%;
  animation: slide-to-left 1.5s;

  @keyframes slide-to-left {
    0% {
      transform: translateX(50%);
      opacity: 0;
    } 
      25% {
        transform: translateX(25%);
        opacity: 0;
      }
    
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 {
    padding-bottom: 1rem;
  }
`

export const FormInput = styled(Field)`
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 0.8rem;
  border-radius: 3px;
  font-size: 14px;
  width: calc(100%);
  transition: all 0.2s ease-in-out;
  outline-color: transparent;
  z-index: 99999;
  
  &:focus + label {
    transform: translateY(-120%);
    font-size: 0.9rem;
    color: darkorange;
  }
  
  &:focus {
    outline-color: darkorange;
  }
  
  &:not(:placeholder-shown) + label {
    transform: translateY(-120%);
    font-size: 0.9rem;
    color: black;
  }
`

export const FormErrorMessage = styled(ErrorMessage)`
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 0.8rem;
  height: 1.5rem;
  background: #d30909;
  color: #fff;
  animation: error-fade 0.2s;
  will-change: opacity;
  overflow: hidden;
  z-index: 1;
  
  @keyframes error-fade {
    from {
      opacity: 0;
    } to {
      opacity: 1;
      }
  }
`

export const FormSubmitButton = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0;
  padding: 0.7vw 2vw 0.7vw 2vw;
  border-radius: 50px;
  border: none;
  background: darkorange;
  font-size: 0.8vw;
  color: white;
  box-shadow: 0 10px 0 darkred;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover:not(:disabled) {
    bottom: -10px;
    opacity: 0.75;
    box-shadow: 0 0 0 darkred;
  }
  
  &:disabled {
    background: lightgray;
    box-shadow: 0 10px 0 dimgray;
    color: gray;
    cursor: not-allowed;
  }
`
