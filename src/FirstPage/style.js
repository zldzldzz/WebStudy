import styled from "styled-components";

export const mainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
`;

export const leftcontent = styled.div`
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
export const rightcontent = styled.div`
  position: absolute;
  z-index: 3;
  width: 50%;
  height: 100vh;
  left: ${({ isHovered }) => (isHovered ? "50%" : "95%")}; /* 숨김 위치 또는 중앙 */
  transform: ${({ isHovered }) => (isHovered ? "translateX(-50%)" : "translateX(+50)")};
  transition: all 0.5s ease; /* 부드러운 애니메이션 */
  background-color: #3498db;
  padding: 10px 20px;
  cursor: pointer;
`;

export const listDiv = styled.div`
  z-index: 2;
  width: 100%;
  height: 90vh;
  background-color: #0b1032;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const listHead = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 1%;
  text-align: center;
`;
export const textInput = styled.input`
  width: 85%;
  height: 50%;
  padding: 1%;
  border-radius: 8px;
  border: none;
  margin: 2%;
  font-weight: 800;
  font-size: 17px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export const toDoAdd = styled.div`
  display: flex;
  font-size: 60px;
  text-align: center;
  align-items: center;
  align-content: center;
  color: white;
`;
export const toDoList = styled.div`
  width: 95%;
  height: 70vh;
  background-color: #26415e;
  border-radius: 8px;
`;
export const listItems = styled.div`
  color: ${({ ischecked }) => (ischecked ? "#b4182d" : "#37415c")};
  font-size: 16px;
  font-weight: 600;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: ${({ ischecked }) => (ischecked ? "#e5c9d7" : "#83a6ce")};
  border-radius: 8px;
  border: 0.1rem solid ${({ ischecked }) => (ischecked ? "#b4182d" : "#37415c")};
`;
export const deleteBtn = styled.div`
  margin: auto;
  margin-left: 4%;
  font-size: 15px;
`;
export const listItemsText = styled.div`
  margin: auto;
  font-size: 17px;
  margin-left: 3%;
`;
export const selectDeleteBtn = styled.div`
  color: white;
  border-radius: 30px;
  text-align: center;
  width: 95%;
  margin: auto;
  height: 6%;
  background-color: #413b61;
  font-size: 20px;
`;
