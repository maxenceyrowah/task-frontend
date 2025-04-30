import { useEffect, useState } from "react";

import { deleteTask, getTasks } from "../gateway/tasksGateway";
import { ITask } from "../interfaces/Task";
import TaskTitle from "./TaskTitle";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <TaskTitle />
      <TaskItem tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default TaskList;
