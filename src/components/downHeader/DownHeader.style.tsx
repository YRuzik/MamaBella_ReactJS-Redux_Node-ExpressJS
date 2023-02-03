import styled from "styled-components";


export const DownHeaderBody = styled.div`
  width: 100%;
  z-index: 10000000;
`

export const DownHeaderWrapper = styled.div`
  padding: 1rem 20rem 1rem 20rem;
  display: flex;
  justify-content: start;
`

export const DownHeaderElements = styled.div`
  display: flex;
`

export const DownHeaderElement = styled.div`
  padding-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 172, 82, 0.8);
  }
`
