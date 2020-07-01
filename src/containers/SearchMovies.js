import React, { useState } from 'react'
import FetchMovies from '../components/FetchMovies'

function SearchMovies() {
    
    const [query, setQuery] = useState(null)

    function userSearchQuery(event) {
        event.preventDefault()
        setQuery((event.target.name.value).toLowerCase())
        event.target.name.value = ''
    }

    return (
        <div>
            <FetchMovies searchQuery={query} />
            <form onSubmit={(event) => userSearchQuery(event)}>
                <input type="text" name="name"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SearchMovies