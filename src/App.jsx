import React, { useState } from "react";
import "./App.css"; // π₯ λ°λμ App.css νμΌμ import ν΄μ€μΌ ν©λλ€.
import "./component/container.css";
import "./component/layout.css";
import TodoBoard from "./component/TodoBoard";
// import TodoItem from "./component/TodoItem";

const App = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const [todoList, setTodoList] = useState([]);
  //   const [todoListdo, setTodoListdo] = useState([]);

  const addItem = () => {
    const newPlan = {
      id: todoList.length + 1,
      title: inputTitle,
      content: inputContent,
    };
    // console.log("im here", inputTitle, inputContent);
    setTodoList([...todoList, newPlan]);
    // setTodoListdo([...todoListdo, inputContent]);
    // setTodoList([...todoList, inputContent]);
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
            <label> μ λͺ©</label>
            <input
              type="text"
              onChange={(event) => setInputTitle(event.target.value)}
            />
            <label> λ΄μ©</label>
            <input
              type="text"
              onChange={(event) => setInputContent(event.target.value)}
            />
          </div>

          <button onClick={addItem} className="addbtn">
            μΆκ°
          </button>
        </div>

        <TodoBoard todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
