import styled from "styled-components";

export const AddressesContainer = styled.div`
  padding: 2rem;
  text-align: start;
  width: 100%;
  max-height: 50rem;
  overflow-y: auto;

  box-shadow: -10px 0 15px rgba(0,0,0,.25);

  h1 {
    color: white;
    padding-bottom: 2rem;
  }
`

export const AddressesAddMoreButton = styled.button`
  font-size: 1.25rem;
  border: none;
  background: none;
  color: orange;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50px;
  transition: .2s;
  
  &:hover {
    background: rgba(255, 106, 0, 0.2);
    color: darkorange;
  }
`
