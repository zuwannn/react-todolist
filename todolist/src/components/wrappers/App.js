import React, { Component } from "react";
import TodoList from "../ui/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'active',
      items: [
        {
          id: 1,
          text: "Learn Javascript",
          completed: false,
        },
        {
          id: 2,
          text: "Learn React",
          completed: false,
        },
        {
          id: 3,
          text: "Build a React App",
          completed: false,
        },
      ],
    };
  }

  addNew(text){
    let nextId = this.state.items.length + 1
    let item = {
      id: nextId,
      text: text
    }
    let updatedList = this.state.items.concat([item])

    this.setState({
      items: updatedList
    })
  }
  render(){
    let title = 'Things to do'
    return(
      <div className="container">
        <div className="row">
          <TodoList 
            title={title} 
            {...this.state}
            addNew={this.addNew.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;
