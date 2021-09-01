import React from 'react'

export default function TodoItem(props) {
    const { data } = props;
  
    return (
      <li className="ui-state-default" key={data.id}>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="" />
            {data.text}
          </label>
        </div>
      </li>
    );
}