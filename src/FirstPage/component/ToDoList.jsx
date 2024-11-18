import * as S from "../style"; // 스타일링을 위한 import (스타일을 정의한 파일이 있어야 합니다)
import { useState } from "react";

const ToDoList = function () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: 3,
      text: "투두리스트 만들기",
      checked: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // 할 일 추가 함수
  const AddToDo = function () {
    if (newTodo.trim() === "") return;
    const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: newTodo, checked: false }]);
    setNewTodo("");
  };

  // 할 일 완료 상태 변경 함수
  const toggleCheck = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  // 할 일 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const selectdeleteTodo = () => {
    setTodos(todos.filter((todo) => todo.checked !== true));
  };

  return (
    <S.listDiv>
      <S.listHead>
        <S.textInput
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              AddToDo();
            }
          }}
          placeholder="새 할 일 입력"
        />

        <S.toDoAdd onClick={AddToDo}>+</S.toDoAdd>
      </S.listHead>

      <S.toDoList>
        {todos.map((todo) => (
          <S.listItems key={todo.id} ischecked={todo.checked}>
            <S.listItemsText onClick={() => toggleCheck(todo.id)}>{todo.text}</S.listItemsText>
            <S.deleteBtn onClick={() => deleteTodo(todo.id)}>Delete</S.deleteBtn>
          </S.listItems>
        ))}
      </S.toDoList>

      <S.selectDeleteBtn onClick={selectdeleteTodo}>선택항목 지우기</S.selectDeleteBtn>
    </S.listDiv>
  );
};

export default ToDoList;
