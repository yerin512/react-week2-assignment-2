import { useState } from 'react';

import Title from './components/Title';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [toDoData, setToDoData] = useState([]);
  const [createdIdx, setCreateIdx] = useState(1);

  const addToDo = (inputToDo) => {
    setCreateIdx(createdIdx + 1);

    const newTodo = {
      idx: createdIdx,
      toDo: inputToDo,
    };

    setToDoData([newTodo, ...toDoData]);
  };

  const completeToDo = () => {
  // completedToDo 삭제하는 코드 작성 예정

  };

  const handlerClickAddButton = (inputToDo) => {
    addToDo(inputToDo);
  };

  const handlerClickCompleteButton = (targetToDo) => {
    completeToDo(targetToDo);
  };

  return (
    <>
      <Title title="To-do" />
      <InputTodo onClick={handlerClickAddButton} />
      <TodoList toDoData={toDoData} onClick={handlerClickCompleteButton} />
    </>
  );
}
