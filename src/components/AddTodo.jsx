import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, inputHandler } from "../features/todo/todoSlice";

const AddTodo = () => {
  const { todoInput } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: addTodo });

    //You can also write it like this-
    //dispatch(addtodo(todoInput))
  };
  return (
    <section className="addTodo-section">
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          onChange={(e) =>
            dispatch({ type: inputHandler, payload: e.target.value })
          }
          value={todoInput}
        />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
