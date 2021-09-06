import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FilteredList from "../FilteredList";
import {applyFilter} from '../../services/filter'

export default function TodoList(props) {
  const {items, filter, mode} = props.data
  const {addNew, changeFilter, changeStatus} = props.actions
  const count = items.length
  const filterItems = applyFilter(items, filter)

  return(
    <div className="todolist">
      <Header {...{addNew, mode}}/>
      <FilteredList items={filterItems} changeStatus={changeStatus}/>
      <Footer {...{count, filter, changeFilter, mode}}/>
    </div>
  )
} 
