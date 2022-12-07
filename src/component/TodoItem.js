import React from "react";

// function TodoItem() {
//   return <div>공부하기</div>;
// }

function TodoItem(props) {
  return (
    <div className="todo-item">
      <div className="todoinner">
        <div className="todotitle">{props.item.title}</div>
        <div></div>
        <div>{props.item.content}</div>
      </div>
      <div className="todobtn">
        <button>삭제하기</button>
        <button>완료</button>
      </div>
    </div>
  );
}

export default TodoItem;
