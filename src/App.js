import "./App.css";
import "./header/component/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Main/component/MainPage";
import FirstPage from "./FirstPage/component/FirstPage";
import SecondPage from "./SecondPage/component/SecondPage";
import ThirdPage from "./ThirdPage/component/ThirdPage";
/*
변수명은 소문자 시작
함수명 시작은 대문자,
띄어쓰기 대신 대문자
 */

function App() {
  const text = ["1장", "2장", "3장"];
  const components = [FirstPage, SecondPage, ThirdPage];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {text.map((title, index) => (
          <Route key={index} path={`/${title}`} element={React.createElement(components[index])} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
