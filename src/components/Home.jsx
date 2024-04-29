import React from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";

const Home = ({ tasks, setTasks, statuses }) => {
  return (
    <div className="app-css">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} statuses={statuses} />
    </div>
  );
};

export default Home;
