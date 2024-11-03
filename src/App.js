import "./App.css";
import "./header/component/Hello";
import Hello from "./header/component/Hello";
/*
변수명은 소문자 시작
함수명 시작은 대문자,
띄어쓰기 대신 대문자
 */
function App() {
  return (
    <div className="App">
      <Hello></Hello>
    </div>
  );
}

export default App;
