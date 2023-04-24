import styled from "styled-components";

export const ToasterBody = styled.div`
  position: fixed;
  bottom: 2%;
  left: 1%;
  width: 20%;
  height: 7%;
  background-color: white;
  z-index: 10000000000;
  border-radius: 10px;
  vertical-align: bottom;
  line-height: 400%;
  text-align: center;
  
  animation: slide-to-up 0.5s ease;

  @keyframes slide-to-up {
    from {
      transform: translateY(150%);
    } to {
      transform: translateY(0);
      }
  }
`

