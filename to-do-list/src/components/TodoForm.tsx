// src/components/TodoForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs'; // Importa o ícone

interface TodoFormProps {
  onAddTask: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa" // Placeholder atualizado
        value={inputValue}
        onChange={handleInputChange}
        aria-label="Nova tarefa"
      />
      {/* Botão com texto e ícone */}
      <button type="submit">
        Criar <BsPlusCircleFill size={16} />
      </button>
    </form>
  );
};

export default TodoForm;