import ToDoItem from "./To-Do-Item";

const ToDoList = ({todo}) => {
  return (
    <>
      {todo.map((msg, index) => (
        <ToDoItem key={index} todo={msg} />
      ))}
    </>
  );
};

export default ToDoList;
