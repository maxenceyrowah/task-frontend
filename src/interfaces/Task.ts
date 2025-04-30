type TaskStatus = "pending" | "in-progress";

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface TaskItemProps {
  tasks: ITask[];
  handleDelete: (id: number) => void;
}
