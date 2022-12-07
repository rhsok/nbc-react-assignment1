import React from "react";

// function TodoItem() {
//   return <div>공부하기</div>;
// }

function TodoItem(props) {
  return (
    <div className="todo-item">
      <div>
        {props.item}
        {props.item1}
      </div>
    </div>
  );
}

export default TodoItem;
