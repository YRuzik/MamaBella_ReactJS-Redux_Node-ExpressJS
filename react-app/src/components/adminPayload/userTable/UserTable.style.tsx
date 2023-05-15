import styled from "styled-components";
import {Link} from "react-router-dom";

export const UserTableWrapper = styled.div`

  background-color: #2F313E;
  box-shadow: 0 0 15px rgba(0,0,0,.4);
`

export const UserTableCheckAll = styled.div`
  transition: .2s;
  cursor: pointer;
  border-top: 3px solid rgba(255, 255, 255, .15);
  text-align: center;

  &:hover {
    background-color: rgb(57, 66, 80);
  }
`

export const UserTableContainer = styled.table`
  color: white;
  width: 100%;
  height: 100%;
  border-spacing: 0px;
  border-collapse: separate;
  text-align: left;
  border-collapse: collapse;
`

export const THead = styled.thead`
  font-size: 1rem;
  opacity: 0.4;
`

export const THeadLabels = styled.th`
  padding: 16px 48px 16px 0px;
  border-bottom: none;
  text-align: left;
  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    padding-right: 32px;
  }
`

export const TBody = styled.tbody`
  padding: 0px;
  border: none;
  transition: opacity 300ms ease 0s;
  transform: translateZ(0px);
`

export const TBodyTR = styled.tr`
  user-select: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgb(75, 75, 75);
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
`

export const TBodyTD = styled.td`
  text-align: start;
  display: table-cell;
  vertical-align: inherit;
  padding: 15px 0 15px 0;
  border-top: 1px solid rgba(0,0,0,.25);
  font-size: 1.25rem;
  
  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    width: 70px;
    padding-right: 32px;
  }
`

export const TBodyTD1 = styled.td`
  text-align: start;
  display: table-cell;
  vertical-align: inherit;
  padding: 15px 0 15px 0;
  border-top: 1px solid rgba(0,0,0,.25);
  font-size: 0.7rem;
  
  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    width: 70px;
    padding-right: 32px;
  }
`

export const UserTableTBody = styled.tbody`
`

export const UserTableItemStartStroke = styled.tr`
  text-align: start;
`

export const UserTableItemStartName = styled.th`
  text-align: start;
  padding: 1.5%;
`

export const UserTableItemStroke = styled.tr`
  text-align: start;
  border-top: 1px solid rgba(255,255,255,.25); 
  cursor: pointer;
  transition: .2s;
  
  &:hover{
    opacity: 0.7;
  }
`

export const UserTableItemValue = styled.td`
  text-align: start;
  font-weight: normal;
  padding: 1.5%;
  opacity: 0.8;
`

export const UserTableButton = styled.button`
  margin: 1%;
  font-size: 110%;
  letter-spacing: 20px;
  font-weight: bold;
  background-color: transparent;
  padding: 1%;
  border: none;
  color: #ffffff;
  transition: .2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const AdminFlexBox = styled.div`
  width: 100%;
`

export const AdminLayout = styled.div`
  background-color: rgba(60, 68, 81, 255);
  width: 100vw;
  height: 49.99vw;
  position: fixed;
`
