import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  //   console.log("todoBoard", props.todoList);
  return (
    <div>
      <h1>Todo List</h1>
      <div className="todolist">
        {props.todoList.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
        {props.todoListdo.map((item1) => (
          <TodoItem item1={item1} key={item1.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoBoard;
