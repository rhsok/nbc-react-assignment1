import React from "react";

// function TodoItem() {
//   return <div>공부하기</div>;
// }

function TodoItem(props) {
  return (
    <div className="todo-item">
      <p>{props.item.title}</p>
      <p>{props.item.content}</p>
    </div>
  );
}

export default TodoItem;
