import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoContext from "./layout/TodoContext";

// 1. layout/TodoContext 파일 생성
// 2. todoData 배열에 value 값을 전달?
function App() {
  const [todoData, setTodoData] = useState([
    { id: 1, title: "React Study", isCompleted: false },
    { id: 2, title: "React 22", isCompleted: false },
    { id: 3, title: "React 33", isCompleted: true },
  ]);

  return (
    <TodoContext.Provider value={{ todoData }}>
      <TodoList />
    </TodoContext.Provider>
  );
}
export default App;
