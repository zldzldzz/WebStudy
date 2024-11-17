import { useState } from "react";
import Nav from "../../header/component/Nav";
import * as S from "../style.js";
import ToDoList from "./ToDoList.jsx";
const FirstPage = function () {
  const [isHoveredL, setIsHoveredL] = useState(false);
  const [isHoveredR, setIsHoveredR] = useState(false);

  return (
    <>
      <Nav />
      <S.mainDiv>
        <S.leftcontent
          onMouseEnter={() => setIsHoveredL(true)} // 마우스를 올리면 중앙으로
          isHovered={isHoveredL}
        >
          이원진
          <button onClick={() => setIsHoveredL(false)}>닫기</button>
        </S.leftcontent>

        <S.rightcontent
          onMouseEnter={() => setIsHoveredR(true)} // 마우스를 올리면 중앙으로
          isHovered={isHoveredR}
        >
          <button onClick={() => setIsHoveredR(false)}>닫기</button>

          <ToDoList />
        </S.rightcontent>
      </S.mainDiv>
    </>
  );
};

export default FirstPage;
