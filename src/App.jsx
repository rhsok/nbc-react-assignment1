import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import "./component/container.css";
import "./component/layout.css";
import TodoBoard from "./component/TodoBoard";

const App = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const [todoList, setTodoList] = useState([]);
  //   const [todoListdo, setTodoListdo] = useState([]);

  const addItem = () => {
    // console.log("im here", inputTitle, inputContent);
    setTodoList([...todoList, inputTitle]);
    // setTodoListdo([...todoListdo, inputContent]);
    // setTodoList([...todoList, inputContent]);
  };

  const newPlan = {
    id: plans.length + 1,
    title: title,
    content: content,
  };

  return (
    <div>
      <div className="layout">
        <div className="container">
          <div>MY Todo List</div>
          <div>React</div>
        </div>

        <div className="add-form">
          <div className="input-group">
            <label> 제목</label>
            <input
              type="text"
              onChange={(event) => setInputTitle(event.target.value)}
            />
            <label> 내용</label>
            <input
              type="text"
              onChange={(event) => setInputContent(event.target.value)}
            />
          </div>

          <button onClick={addItem} className="addbtn">
            추가
          </button>
        </div>

        <TodoBoard todoList={todoList} todoListdo={todoListdo} />
      </div>
    </div>
  );
};

export default App;
