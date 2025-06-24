const AddTask = ({ task, setTask, item, setItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.trim() === "") return;

    if (task.id) {
      const updateTask = item.map((toupdate) =>
        toupdate.id === task.id
          ? { id: task.id, name: task.name, time: new Date() }
          : toupdate
      );
      setItem(updateTask);
    } else {
      const newTask = {
        id: Date.now(), // better than Math.random()
        name: task.name,
        time: new Date(),
      };
      setItem([...item, newTask]);
    }

    // Clear input after submit
    setTask({ id: null, name: "" });
  };

  function handleChange(e) {
    setTask({ ...task, name: e.target.value });
  }

  return (
    <section>
      <div className="Container_Todo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task name"
            value={task.name || ""}
            onChange={handleChange}
            maxLength={20}
          />
          <button type="submit">{task.id ? "Update Task" : "Add Task"}</button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
