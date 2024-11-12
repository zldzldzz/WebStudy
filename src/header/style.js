import styled from "styled-components";

export const navDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #89e7d0;
`;

export const title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;

//nav의 li를 감싸는 ul
export const navUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`;

//nav의 li
export const navLi = styled.li`
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
