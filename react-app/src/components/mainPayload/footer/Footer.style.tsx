import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 12.5rem;
  background: rgba(51,51,51);
  color: white;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
`

export const FooterContent = styled.div`
  font-size: 135%;
  min-width: 65%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  border-left: 2px solid rgba(255, 255, 255,.25);
  display: inline;
  
  div{
    padding-left: 1rem;
  }
`

export const FooterLink = styled(Link)`
  color: white;
  opacity: 0.5;
  text-decoration: none;
  font-weight: bold;
  padding-right: 1rem;
  transition: opacity 0.2s ease-in-out;
  
  &:hover {
    opacity: 1;
  }
`

export const Support = styled.div`
    text-align: end;
  
    ul {
      opacity: 0.5;
      list-style-type: none;
      
      li{
        opacity: 0.45;
        padding: 0.1rem 0 0.1rem 0;
        user-select: text;

        :first-child {
          padding-top: 0.75rem;
        }
      }
    }
`
