import styled from "styled-components";

export const UIDisabledInput = styled.input`
  width: 25rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  border-radius: 50px;
  
  &:disabled {
    background-color: gray;
  }
`

export const UILabel = styled.label`
  padding-left: 1rem;
  font-size: 1.25rem;
  color: white;
`

export const UIInputLabelContainer = styled.div`
  display: grid;
  padding-bottom: 1rem;
`

export const UIContainer = styled.div`
  padding: 2rem;
  text-align: start;
  width: 100%;
  
  box-shadow: -10px 0 15px rgba(0,0,0,.25);
  
  h1 {
    color: white;
    padding-bottom: 2rem;
  }
`

export const UIFirstInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const UILargeInput = styled(UIDisabledInput)`
  width: 100%;
`
