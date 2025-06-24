import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
// const date = new Date();
// const myTask = [
//   {
//     id: 1,
//     name: "apple",
//     time: date,
//   },
//   { id: 2, name: "banana", time: date },
//   { id: 3, name: "Cigarrete", time: date },
// ];
function App() {
  //You convert the JSON string into a JavaScript array or object:
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);
  return (
    <div className="App">
      <Header />
      <AddTask task={task} setTask={setTask} item={item} setItem={setItem} />
      <ShowTask task={item} setTask={setTask} item={item} setItem={setItem} />
    </div>
  );
}

export default App;
