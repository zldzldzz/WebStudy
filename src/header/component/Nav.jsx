import React from "react";
import * as S from "../style.js";
import { useNavigate } from "react-router-dom";

const Nav = function () {
  const text = ["1장", "계산기", "ToDoList"];

  const navigate = useNavigate();

  function ConsoleLog(text) {
    console.log(text);
  }

  return (
    <S.navDiv>
      <S.title
        onClick={() => {
          navigate(`/`);
        }}
      >
        여기에 제목 적고
      </S.title>
      <S.navUl>
        {text.map((title, index) => (
          <S.navLi
            key={index}
            onClick={() => {
              ConsoleLog(title);
              navigate(`/${title}`);
            }}
          >
            {title}
          </S.navLi>
        ))}
      </S.navUl>
    </S.navDiv>
  );
};

export default Nav;
