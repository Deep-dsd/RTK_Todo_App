import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <section className="todos-section">
      {todos.length > 0 &&
        todos.map((todo) => {
          return <TodoItem {...todo} key={todo.id} />;
        })}
    </section>
  );
};

export default Todos;
