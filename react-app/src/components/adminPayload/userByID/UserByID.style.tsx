import styled from "styled-components";

export const UBIContainer = styled.div`
  color: white;
  text-align: start;
`

export const UBIFlex = styled.div`
  display: flex;
  border: 1px solid rgba(114, 77, 169, 0.32);
  justify-content: center;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,.25);
`
export const UBILabel = styled.span`
    opacity: 0.5;
`

export const UBIPersonalData = styled.div`
  padding-left: 5%;
  text-align: start;
  line-height: 40px;
  font-size: 150%;
`

export const UBIButtonDelete = styled.button`
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: rgba(255, 32, 32, 0.5);
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  box-shadow: 0 10px 0px rgba(255, 0, 0, 0.5);
  
  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
    box-shadow: 0 0 0px rgba(255, 32, 32, 0.5);
    transform: translateY(10px);
  }
`

export const ButtonBack = styled.button`
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: rgba(217, 217, 217, 0.5);
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  box-shadow: 0 10px 0px rgba(180, 180, 180, 0.5);

  &:hover {
    background-color: rgba(180, 180, 180, 0.6);
    box-shadow: 0 0 0px rgba(217, 217, 217, 0.5);
    transform: translateY(10px);
  }
`

export const UBIButtonControl = styled.div`
  display: flex;
  justify-content: end;
`

export const LabelBack = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  color: white;
`
