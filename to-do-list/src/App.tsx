// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Task } from './interfaces/Task';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import logo from './assets/Logo.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    if (!text.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <img src={logo} alt="" />
      </header>
      <main className="app-container">
        <TodoForm onAddTask={addTask} />

        <div className="list-header">
          <div className="created-tasks">
            Tarefas criadas <span className="counter">{createdTasksCount}</span>
          </div>
          <div className="completed-tasks">
            Concluídas <span className="counter">{completedTasksCount} de {createdTasksCount}</span>
          </div>
        </div>

        <TodoList
          tasks={tasks}
          onToggleTask={toggleTask}
          onRemoveTask={removeTask}
        />
      </main>
    </div>
  );
}

export default App;