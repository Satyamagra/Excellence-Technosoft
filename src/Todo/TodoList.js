import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, deleteTodo } = props;
  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          id={todo.id}
          deleteTodo={deleteTodo}
        ></Todo>
      ))}
    </>
  );
}
