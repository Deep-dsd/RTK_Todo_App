import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo, checkTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo, isChecked, id }) => {
  const dispatch = useDispatch();
  const { editedTodo } = useSelector((state) => state.todo);
  return (
    <div className="todo">
      <input
        type="checkbox"
        disabled={editedTodo ? true : false}
        checked={isChecked}
        onChange={(e) =>
          dispatch({
            type: checkTodo,
            payload: { check: e.target.checked, id },
          })
        }
      />
      <div className={`${isChecked && "line-through"} todo-content`}>
        {todo}
      </div>
      {!isChecked && (
        <div className="btn-container">
          <button
            className={`${editedTodo ? "disabled" : null} edit-btn btn`}
            title="edit todo"
            onClick={() => dispatch({ type: editTodo, payload: id })}
            disabled={editedTodo ? true : false}
          >
            <FaEdit />
          </button>
          <button
            className={`${editedTodo ? "disabled" : null} del-btn btn`}
            title="remove todo"
            onClick={() => dispatch({ type: removeTodo, payload: id })}
            disabled={editedTodo ? true : false}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
