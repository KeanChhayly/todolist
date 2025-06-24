import React from "react";

const ShowTask = ({ task, setTask, item, setItem }) => {
  function HandleDelete(id) {
    const filterTask = item.filter((task) => task.id !== id);
    setItem(filterTask);
  }

  function HandleEdit(id) {
    const find = item.find((i) => i.id === id);
    setTask(find);
    console.log(find);
  }

  function HandleReset() {
    setItem([]);
    setTask({ name: "" });
  }

  return (
    <section>
      <div className="Container_Show">
        <div className="flex_item">
          <div>
            <p>Todo</p>
            <p className="count">{item.length}</p>
          </div>
          <button
            style={{ color: "#000" }}
            className="button"
            onClick={HandleReset}
          >
            ClearAll
          </button>
        </div>
        <ul>
          {item.map((tasks) => (
            <li key={tasks.id}>
              <p>{tasks.name}</p>
              <div>
                <button
                  style={{ color: "#000" }}
                  className="button"
                  onClick={() => HandleEdit(tasks.id)}
                >
                  <i className="bi bi-pencil-square"></i> Edit
                </button>
                <button
                  className="button"
                  style={{ background: "red" }}
                  onClick={() => HandleDelete(tasks.id)}
                >
                  <i className="bi bi-trash"></i> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShowTask;
