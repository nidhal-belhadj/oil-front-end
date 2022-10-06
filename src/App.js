import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoContainer from "./components/TodoContainer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const todos = [
    { id: uuidv4(), title: "Setup development environment", completed: true },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    { id: uuidv4(), title: "Deploy to live server", completed: false },
  ];
  return (
    
        <div className="App">
          <header className="App-header">
            <TodoContainer todos={todos} />
          </header>
        </div>
  );
};

export default App;
