import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const [tasks, setTasks] = useState([]);
  const statuses = ["todo", "doing", "done"];

  console.log("tasks", tasks);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
      }
    }
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="app-css">
        
        <Router>
          <Nav />
          <Routes>
            <Route path="/" index element={<Home tasks={tasks} setTasks={setTasks} statuses={statuses} />} />
            <Route path="todo" index element={<ListTasks tasks={tasks} setTasks={setTasks} statuses={["todo"]} />} />
            <Route path="doing" index element={<ListTasks tasks={tasks} setTasks={setTasks} statuses={["doing"]} />} />
            <Route path="done" index element={<ListTasks tasks={tasks} setTasks={setTasks} statuses={["done"]} />} />
          </Routes>
        </Router>
      </div>
    </DndProvider>
    
  );
}

export default App;