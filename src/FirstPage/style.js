import styled from "styled-components";

export const mainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
`;

export const content = styled.div`
  position: absolute;
  width: 30%;
  height: 100vh;
  left: ${({ isHovered }) => (isHovered ? "50%" : "-30%")}; /* 숨김 위치 또는 중앙 */
  transform: ${({ isHovered }) => (isHovered ? "translateX(-50%)" : "translateX(0)")};
  transition: all 0.5s ease; /* 부드러운 애니메이션 */
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
`;
