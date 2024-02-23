import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todoInput: "",
  editedTodo: null,
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    inputHandler: (state, action) => {
      const input = action.payload;
      state.todoInput = input;
    },

    addTodo: (state, action) => {
      if (state.editedTodo) {
        state.todos = state.todos.map((todo) => {
          if (todo.id === state.editedTodo.id) {
            todo.todo = state.todoInput;
            todo.isEditing = false;
          }
          return todo;
        });
      } else {
        const todo = {
          id: nanoid(),
          todo: state.todoInput,
          isChecked: false,
          isEditing: false,
        };
        state.todos.push(todo);
      }
      state.todoInput = "";
      state.editedTodo = null;
    },

    removeTodo: (state, action) => {
      const selectedId = action.payload;
      const updatedTodo = state.todos.filter((todo) => todo.id !== selectedId);
      state.todos = updatedTodo;
    },

    editTodo: (state, action) => {
      const selectedId = action.payload;
      const selectedTodo = state.todos.find((todo) => todo.id === selectedId);
      selectedTodo.isEditing = true;
      state.editedTodo = selectedTodo;
      state.todoInput = selectedTodo.todo;
    },

    checkTodo: (state, action) => {
      const { check, id } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isChecked = check;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, inputHandler, editTodo, checkTodo } =
  todoSlice.actions;

//This export is important because, the store needs to know about the reducers.
export default todoSlice.reducer;
