import React, { useEffect, useState } from 'react';
import Section from './Section';

const ListTasks = ({ tasks, setTasks, statuses }) => {
  const [todos, setTodos] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    const filterdTodos = tasks.filter((task) => task.status === "todo");
    const filterdDoing = tasks.filter((task) => task.status === "doing");
    const filterdDone = tasks.filter((task) => task.status === "done");

    setTodos(filterdTodos);
    setDoing(filterdDoing);
    setDone(filterdDone);
  }, [tasks]);


  return (
    <div className="list-section">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          doing={doing}
          done={done}
        />
      ))}
    </div>
  );
};

export default ListTasks;
