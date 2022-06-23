import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todoList }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  ) : (
    <p>Aucune tâche en cours </p>
  );
}
