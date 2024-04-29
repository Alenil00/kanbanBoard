import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDrag } from "react-dnd";
import Modal from "./Modal";

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDelete = (id) => {
    const filterdTasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(filterdTasks));

    setTasks(filterdTasks);

    toast("Task deleted", { icon: "🎉" });
  };

  const [showModal, setShowModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.name);
  const [taskContent, setTaskContent] = useState(task.content);

  const handleModalClose = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, name: taskTitle, content: taskContent } : t
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTasks(updatedTasks);

    setShowModal(false);
  };

  return (
    <div
      ref={drag}
      className={`relative p-4 nt-8 shadow-md rounded-md ${
        isDragging ? "opacity-25" : "opacity-100"
      } cursor-grab`}
    >
      <p>{task.name}</p>
      <button
        className="absolute bottom-1 right-10 text-slate-400"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      <button
        className="absolute bottom-1 right-1 text-slate-400"
        onClick={() => handleDelete(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          initialTitle={taskTitle}
          setTitle={setTaskTitle}
          initialContent={taskContent}
          setContent={setTaskContent}
        />
      )}
    </div>
  );
};

export default Task;
