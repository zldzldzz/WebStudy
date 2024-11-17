import Nav from "../../header/component/Nav";
import * as S from "../style.js";
import Arithmometer from "./Arithmometer.jsx";

const SecondPage = function () {
  return (
    <>
      <Nav />
      <S.mainDiv>
        <Arithmometer />
      </S.mainDiv>
    </>
  );
};

export default SecondPage;
