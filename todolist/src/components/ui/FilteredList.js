import React from "react";
import TodoItem from './TodoItem'

export default function FilteredList(props) {
    const {items, changeStatus} = props

    return(
        <ul className="list-unstyled">
            {items.map(item => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
            ))}
        </ul>
    )
}