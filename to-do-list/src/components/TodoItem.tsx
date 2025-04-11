// src/components/TodoItem.tsx
import React from 'react';
import { Task } from '../interfaces/Task';
import { BsTrash, BsCheckCircleFill, BsCircle } from 'react-icons/bs'; // Ícones

interface TodoItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggleTask, onRemoveTask }) => {
  const checkboxId = `task-${task.id}`; // ID único para o label/input

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {/* Checkbox Customizado */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id={checkboxId}
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          style={{ display: 'none' }} // Esconde o input real
        />
        <label htmlFor={checkboxId} className="custom-checkbox">
          {task.completed ? <BsCheckCircleFill size={18} /> : <BsCircle size={18} />}
        </label>
      </div>

      {/* Texto da tarefa */}
      <span className="task-text">{task.text}</span>

      {/* Botão de Remover com Ícone */}
      <button
        onClick={() => onRemoveTask(task.id)}
        className="remove-button"
        aria-label={`Remover tarefa ${task.text}`}
      >
        <BsTrash size={16} />
      </button>
    </li>
  );
};

export default TodoItem;