import React from "react";
import Header from "./Header";
import Task from "./Task";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { ColorProvider } from "./ColorContext";

const Section = ({ status, tasks, setTasks, todos, doing, done }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    setTasks((prev) => {
      const modifiedTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(modifiedTasks))

      toast("Task status changed", {icon: "😎"})

      return modifiedTasks;
    });
  };

  let text = "Todo";
  let tasksToMap = todos;

  if (status === "doing") {
    text = "Doing";
    tasksToMap = doing;
  }
  if (status === "done") {
    text = "Done";
    tasksToMap = done;
  }

  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
      <ColorProvider>
       <Header text={text} count={tasksToMap.length} />
      </ColorProvider>
     
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};

export default Section;
