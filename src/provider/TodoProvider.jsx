import { useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { todoClient } from '../lib/todoClient';

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const getTodos = async () => {
    const { data } = await todoClient.get('/');

    setTodos(data);
  };
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleDelete = async (id) => {
    const { data } = await todoClient.delete(`/${id}`);
    await getTodos();

    return data;
  };
  const handleToggleCompleted = async (id, currentCompleted) => {
    const { data } = await todoClient.patch(`/${id}`, {
      completed: !currentCompleted,
    });

    await getTodos();

    return data;
  };

  const handleSubmit = async (text) => {
    const { data } = await todoClient.post('/', {
      text,
      completed: false,
    });
    setTodoText('');
    await getTodos();

    return data;
  };

  const getFilteredTodos = (selectedFilter) => {
    if (selectedFilter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }

    if (selectedFilter === 'pending') {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          handleToggleCompleted,
          handleDelete,
          handleSubmit,
          setTodos,
          getFilteredTodos,
          handleChange,
          todoText,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
