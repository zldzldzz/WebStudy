import React from "react";
import * as S from "../style.js";

const Nav = function () {
  const text = ["1장", "2장", "3장"];

  function ConsoleLog(text) {
    console.log(text);
  }
  function greetUser() {
    console.log("Hi there, user!");
  }
  return (
    <S.navDiv>
      <S.title>여기에 제목 적고</S.title>
      <S.navUl>
        <S.navLi onClick={() => ConsoleLog(text[0])}>{text[0]}</S.navLi>
        <S.navLi onClick={() => ConsoleLog(text[1])}>{text[1]}</S.navLi>
        <S.navLi onClick={() => ConsoleLog(text[2])}>{text[2]}</S.navLi>
        <S.navLi onClick={() => ConsoleLog(text[0])}>{text[0]}</S.navLi>
        <S.navLi onClick={() => ConsoleLog(text[1])}>{text[1]}</S.navLi>
        <S.navLi onClick={() => ConsoleLog(text[2])}>{text[2]}</S.navLi>
      </S.navUl>
    </S.navDiv>
  );
};

export default Nav;
