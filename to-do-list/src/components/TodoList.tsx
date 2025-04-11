// src/components/TodoList.tsx
import React from 'react';
import { Task } from '../interfaces/Task';
import TodoItem from './TodoItem';
import { TbClipboardText } from 'react-icons/tb'; // Ícone de prancheta

interface TodoListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggleTask, onRemoveTask }) => {
  // Renderiza estado vazio se não houver tarefas
  if (tasks.length === 0) {
    return (
      <div className="empty-list-message">
        <TbClipboardText size={56} className="empty-icon" />
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    );
  }

  // Renderiza a lista se houver tarefas
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;