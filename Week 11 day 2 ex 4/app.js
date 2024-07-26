// app.js tasks within todo list
import { TodoList } from './todo.js';

const todoList = new TodoList();

todoList.addTask('Task 1');
todoList.addTask('Task 2');
todoList.addTask('Task 3');

todoList.markComplete(1);

todoList.listTasks();
