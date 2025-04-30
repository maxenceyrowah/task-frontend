import SharedButton from "./Button";
import { TaskItemProps } from "../interfaces/Task";

const TaskItem: React.FC<TaskItemProps> = ({ tasks, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.status}
          <SharedButton
            handleDelete={() => handleDelete(task.id)}
            taskID={task.id}
            name="Supprimer"
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskItem;
