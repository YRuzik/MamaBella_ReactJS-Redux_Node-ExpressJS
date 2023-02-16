import styled from "styled-components";
import {UILargeInput} from "../userInfo/UserInfo.style";

export const AddressesItemContainer = styled.div`
  position: relative;
  width: 100%
`

export const AddressesItemInput = styled(UILargeInput)`
  width: 90%;
`

export const AddressesItemDeleteIcon = styled.button`
  background: url("https://www.iconninja.com/files/683/828/57/trash-can-icon.png") no-repeat;
  background-size: cover;
  border-radius: 50px;
  border: none;
  min-width: 2.5rem;
  min-height: 2.5rem;
  cursor: pointer;
  padding: 0.7rem;
  margin: 1rem;
  
  &:hover {
    background-color: rgba(0,0,0,.15);
  }
`
