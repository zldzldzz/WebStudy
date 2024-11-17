import React, { useState } from "react";
import * as S from "../style";

const Arithmometer = function () {
  const [input, setInput] = useState({
    n1: "0",
    operator: "",
    n2: "0",
  });
  const [lastClick, setlastClick] = useState("");
  const [firstNumber, setFirstNumber] = useState(true);

  const Calculate = (n1, operator, n2) => {
    let result = 0;
    switch (operator) {
      case "+":
        result = Number(n1) + Number(n2);
        break;
      case "-":
        result = Number(n1) - Number(n2);
        break;
      case "x":
        result = Number(n1) * Number(n2);
        break;
      case "/":
        result = Number(n1) / Number(n2);
        break;
      default:
        break;
    }
    return String(result);
  };

  const setN1 = (num) => {
    setInput((prev) => ({
      ...prev,
      n1: prev.n1 === "0" ? num : prev.n1 + num,
    }));
  };

  const setN2 = (num) => {
    setInput((prev) => ({
      ...prev,
      n2: prev.n2 === "0" ? num : prev.n2 + num,
    }));
  };

  const setOperator = (op) => {
    setInput((prev) => {
      if (prev.operator !== "" && prev.n2 !== "0") {
        const result = Calculate(prev.n1, prev.operator, prev.n2);
        return {
          n1: result,
          operator: op,
          n2: "0",
        };
      } else {
        return {
          ...prev,
          operator: op,
        };
      }
    });
    setFirstNumber(false);
  };

  const handleNumberClick = (num) => {
    if (firstNumber) {
      setN1(num);
    } else {
      setN2(num);
    }
    setlastClick(num);
  };

  const Reset = () => {
    setInput({ n1: "0", operator: "", n2: "0" });
    setFirstNumber(true);
    setlastClick("");
  };

  const Results = () => {
    const result = Calculate(input.n1, input.operator, input.n2);
    setInput({ n1: result, operator: "", n2: "0" });
    setFirstNumber(true);
    setlastClick("=");
  };

  const isLastClicked = (value) => lastClick === value;

  return (
    <S.mainDiv>
      <S.arithmometer>
        <S.text>
          {input.n1}
          {input.operator}
          {input.n2 !== "0" && input.n2}
        </S.text>
        <S.ariBtnDiv>
          <S.ariOpBtn
            onClick={Reset}
            style={{
              backgroundColor: isLastClicked("C") ? "#19305c" : "",
              color: isLastClicked("C") ? "#f3dadf" : "",
            }}
          >
            C
          </S.ariOpBtn>
          <S.ariOpBtn
            onClick={() => {
              setOperator("+");
              setlastClick("+");
            }}
            style={{
              backgroundColor: isLastClicked("+") ? "#19305c" : "",
              color: isLastClicked("+") ? "#f3dadf" : "",
            }}
          >
            +
          </S.ariOpBtn>
          <S.ariOpBtn
            onClick={() => {
              setOperator("-");
              setlastClick("-");
            }}
            style={{
              backgroundColor: isLastClicked("-") ? "#19305c" : "",
              color: isLastClicked("-") ? "#f3dadf" : "",
            }}
          >
            -
          </S.ariOpBtn>
          <S.ariOpBtn
            onClick={() => {
              setOperator("x");
              setlastClick("x");
            }}
            style={{
              backgroundColor: isLastClicked("x") ? "#19305c" : "",
              color: isLastClicked("x") ? "#f3dadf" : "",
            }}
          >
            x
          </S.ariOpBtn>
          {[7, 8, 9].map((num) => (
            <S.ariBtn
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              style={{
                backgroundColor: isLastClicked(num.toString()) ? "#19305c" : "",
                color: isLastClicked(num.toString()) ? "#f3dadf" : "",
              }}
            >
              {num}
            </S.ariBtn>
          ))}
          <S.ariOpBtn
            onClick={() => {
              setOperator("/");
              setlastClick("/");
            }}
            style={{
              backgroundColor: isLastClicked("/") ? "#19305c" : "",
              color: isLastClicked("/") ? "#f3dadf" : "",
            }}
          >
            /
          </S.ariOpBtn>
          {[4, 5, 6].map((num) => (
            <S.ariBtn
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              style={{
                backgroundColor: isLastClicked(num.toString()) ? "#19305c" : "",
                color: isLastClicked(num.toString()) ? "#f3dadf" : "",
              }}
            >
              {num}
            </S.ariBtn>
          ))}
          <S.ariOpBtn
            onClick={() => Results("=")}
            style={{
              backgroundColor: isLastClicked("=") ? "#19305c" : "",
              color: isLastClicked("=") ? "#f3dadf" : "",
            }}
          >
            =
          </S.ariOpBtn>
          {[1, 2, 3, 0].map((num) => (
            <S.ariBtn
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              style={{
                backgroundColor: isLastClicked(num.toString()) ? "#19305c" : "",
                color: isLastClicked(num.toString()) ? "#f3dadf" : "",
              }}
            >
              {num}
            </S.ariBtn>
          ))}
        </S.ariBtnDiv>
      </S.arithmometer>
    </S.mainDiv>
  );
};

export default Arithmometer;
