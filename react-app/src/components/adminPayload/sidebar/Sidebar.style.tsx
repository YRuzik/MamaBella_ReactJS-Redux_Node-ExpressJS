import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  min-width: 5%;
  min-height: 100%;
  background-color: #323232;
  display: block;
  color: white;
  font-size: 200%;
  padding-top:2%;
  cursor: pointer;
`

export const SidebarItem = styled.div`
  transition: .2s;
  opacity: 0.5;
  padding: 20%;
  &:hover {
    opacity: 1;
    box-shadow: 0 0 15px rgba(0,0,0,1);
  }
`
