import React, { Component } from "react";
import TodoList from "../ui/TodoList";
import {FILTER_ACTIVE} from '../../services/filter'
import {getAll, addToList} from '../../services/todo'
class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: FILTER_ACTIVE,
      items: getAll()
    };
  }

  addNew(text){
    let updatedList = addToList(this.state.items, {text, completed:false})

    this.setState({
      items: updatedList
    })
  }
  changeFilter(filter){
    this.setState({filter})
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
            changeFilter={this.changeFilter.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;
