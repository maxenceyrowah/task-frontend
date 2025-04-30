import { TaskItemProps } from "./Task";

export type ButtonProps = Omit<TaskItemProps, "tasks"> & {
  name: string;
  taskID: number;
};
