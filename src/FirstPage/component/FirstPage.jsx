import { useState } from "react";
import Nav from "../../header/component/Nav";
import * as S from "../style.js";
const FirstPage = function () {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Nav />
      <S.mainDiv>
        <S.content
          onMouseEnter={() => setIsHovered(true)} // 마우스를 올리면 중앙으로
          isHovered={isHovered}
        >
          이원진
          <button onClick={() => setIsHovered(false)}>닫기</button>
        </S.content>
      </S.mainDiv>
    </>
  );
};

export default FirstPage;
