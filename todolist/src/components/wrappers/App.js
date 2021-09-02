import React, { Component } from "react";
import TodoList from "../ui/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    let item = {
      id: this.state.items.length + 1,
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
            items={this.state.items} 
            addNew={this.addNew}
          />
        </div>
      </div>
    )
  }
}

export default App;
