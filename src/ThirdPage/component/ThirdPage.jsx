import Nav from "../../header/component/Nav";
import * as S from "../style.js";
import ToDoList from "./ToDoList.jsx";

const ThirdPage = function () {
  return (
    <>
      <Nav />
      <S.mainDiv>
        <ToDoList />
      </S.mainDiv>
    </>
  );
};

export default ThirdPage;
