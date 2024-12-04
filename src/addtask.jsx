import { useState } from "react";
import { Check } from "@mui/icons-material"; // Importing a tick icon from Material Icons
import { TaskComponent } from "./tasksList";
import './App.css';
import { ButtonsComponent } from "./buttons";

export const AddTaskComponent = () => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [pending, setPending] = useState(true);

  const FormHandler = (e) => {
    setTask(e.target.value);
  };

  const CompletedHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const DeleteHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const pendingHandler = (e) => {
    e.target.name === "pending" ? setPending(true) : setPending(false);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (task.length !== 0) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setItems([...items, newTask]);
      setTask("");
    } else {
      alert("Provide task Please....");
    }
  };

  return (
    <div>
      <ButtonsComponent pending={pendingHandler} />
      <form onSubmit={SubmitHandler} className="search-component">
        <input
          type="text"
          onChange={FormHandler}
          name="username"
          value={task}
          placeholder="Add Task..."
          maxLength={25}
          required
        />
        <button type="submit" className="add">
          <Check className="icon-container" fontSize="large" /> {/* Material Icons */}
        </button>
      </form>
      <TaskComponent
        activities={items}
        complete={CompletedHandler}
        delete={DeleteHandler}
        pending={pending}
      />
    </div>
  );
};
