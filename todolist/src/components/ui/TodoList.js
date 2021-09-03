import React from "react";
import TodoItem from "./TodoItem";
import Header from "../Header";
import Footer from "../Footer";

function TodoList(props) {
  const { title, items, addNew, filter } = props;
  const { count } = items.length
  return (
    <div className="todolist">
      <Header title={title} addNew={addNew}/>
      <ul className="list-unstyled">
          {items.map(item => 
            <TodoItem key={item.id} data={item}/>
          )}
      </ul>
      <Footer count={count} filter={filter} />
    </div>
  );
}

export default TodoList;
