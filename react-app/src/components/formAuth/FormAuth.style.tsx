import styled from "styled-components";
import {ErrorMessage, Field, Form} from "formik";

export const FormContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormLabel = styled.label`
  margin-top: -0.5rem;
`

export const FormCustom = styled(Form)`
  padding: 1rem;
  position: absolute;
  right: 0;
  text-align: center;
  width: 60%;
  
  h1 {
    padding-bottom: 1rem;
  }
`

export const FormSmallInput = styled(Field)`
  min-height: 2rem;
  width: 35%;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  border-radius: 10px;
  padding: 0.5rem;
  outline: none;
  border: 1px solid black;
  transition: border 0.2s ease-in-out;
  
  &:focus {
    border: 1px solid darkorange;
  }
`

export const FormLargeInput = styled(Field)`
  min-height: 2rem;
  width: 74.4%;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  border-radius: 10px;
  padding: 0.5rem;
  outline: none;
  border: 1px solid black;
  transition: border 0.2s ease-in-out;
  
  &:focus {
    border: 1px solid darkorange;
  }
`

export const FormErrorMessage = styled(ErrorMessage)`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const FormWrapper = styled.div`
  width: 100%;
`
