import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <li className="mb-10 d-flex justify-content-center align-items-center p-10">
      <span className="flex-fill">{todo.content}</span>
      <button className="btn">Valider</button>
      <button className="btn">Modifier</button>
      <button className="btn">Supprimer</button>
    </li>
  );
}
