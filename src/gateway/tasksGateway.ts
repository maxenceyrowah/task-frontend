import axios from "axios";
import { ITask } from "../interfaces/Task";

const API_URL: string = import.meta.env.VITE_API_URL;

export const getTasks = () => axios.get<ITask[]>(API_URL);
export const postTask = (task: Omit<ITask, "id">) =>
  axios.post<ITask>(API_URL, task);
export const putTask = (taskID: number, task: Partial<ITask>) =>
  axios.put<ITask>(`${API_URL}/${taskID}`, task);
export const deleteTask = (taskID: number) =>
  axios.delete(`${API_URL}/${taskID}`);
