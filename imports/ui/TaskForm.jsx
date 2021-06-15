import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const TaskForm = () => {
  const [text, setText] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!text) return;

    Meteor.call('tasks.insert', text);

    setText('');
  };

  return (
    <form className="task-form" onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Запишите новую задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
