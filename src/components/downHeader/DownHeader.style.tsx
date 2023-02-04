import styled from "styled-components";
import {Link} from "react-router-dom";


export const DownHeaderBody = styled.div`
  width: 100%;
  z-index: 10000000;
  backface-visibility: hidden !important;
`

export const DownHeaderAnchor = styled(Link)`
  color: white;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 172, 82, 0.8);
  }
`

export const DownHeaderBodySticky = styled.div`
  width: 100%;
  z-index: 10000000;
  position: fixed;
  background: rgba(54, 42, 102, .25);
  top: 0;
  animation: navbar-slide-up 0.3s;
  box-shadow: 0 0 15px rgba(0,0,0,.75);
  backdrop-filter: blur(20px);

  @keyframes navbar-slide-up {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`

export const DownHeaderWrapper = styled.div`
  padding: 1rem 20rem 1rem 20rem;
  display: flex;
  justify-content: start;
`

export const DownHeaderElements = styled.div`
  display: flex;
  align-items: center;
  
  i {
    margin: 0;
    margin-right: 1rem;
    font-size: 1.5rem;
    padding: 0;
  }
`

export const DownHeaderElement = styled.div`
  padding-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 172, 82, 0.8);
  }
`
