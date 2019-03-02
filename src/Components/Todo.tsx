import * as React from "react";

const todo = (props: any) => {
  const [todoName, setTodoName] = React.useState("");
  const [todoList, setTodoList] = React.useState([""]);

  const inputChangeHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setTodoName(target.value);
  };

  const todoAddHandler = () => {
    const newTodoList = [...todoList, todoName];
    setTodoList(newTodoList);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="submit" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map((todoItem: string, i: number) => {
          return <li key={i}>{todoItem}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default todo;
