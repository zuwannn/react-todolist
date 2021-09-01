import React from "react";

function App() {
  let items = [
    {
      id: 1,
      text: 'Learn Javascript',
      completed:false
    },
    {
      id: 2,
      text: 'Learn React',
      completed: false
    },
    {
      id: 3,
      text: 'Build a React App',
      completed: false
    }
  ]

  let title = 'Things to do'

  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>{title.toUpperCase()}</h1>
          <ul className="list-unstyled">
            {items.map(item => (
              <li className="ui-state-default" key={item.id}>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value=""/>
                    {item.text}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
