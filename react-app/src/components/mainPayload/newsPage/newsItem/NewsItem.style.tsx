import styled from "styled-components";

export const NewsItemContainer = styled.div`
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0,0,0,.5);
  width: 25rem;
  height: 20rem;
  position: relative;
  border: #282c34;
  background-color: #282828fe;
  transition: .2s;
  cursor: pointer;
  
  h1 {
    padding-bottom: 1rem;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`

export const NewsItemThumbnail = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`

export const NewsItemBody = styled.div`
  height: 10rem;
  padding: 1rem;
  color: white;
  
  hr{
    margin: 0.5rem 0 0.5rem 0;  
  }
`

export const NewsItemTitle = styled.div`
  text-align: start;
  font-size: 120%;
  font-weight: bold;
`

export const NewsItemText = styled.div`
  text-align: start;
`
