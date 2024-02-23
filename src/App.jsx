import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <header className="header">
        <h2>Todo List</h2>
      </header>
      <main className="main-section">
        <AddTodo />
        <Todos />
      </main>
    </>
  );
}

export default App;
