import React from "react";

const ListSection = ({ status, tasks, setTasks, todo, doing, done, todos }) => {
  let text = "Todo";

  return (
    <section>
      <div>
        <Header text={text} count={todos.length} status={status} setTasks={setTasks} /> List
      </div>
    </section>
  );
};

export default ListSection;
