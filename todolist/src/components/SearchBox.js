import React from "react";

export default function SearchBox(props) {
    const {query, setSearchQuery} = props

    return(
        <input autoFocus
            type="text"
            className="from-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    )
}