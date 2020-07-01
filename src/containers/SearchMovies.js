import React, { useState } from 'react'
import FetchMovies from '../components/FetchMovies'

function SearchMovies() {
    


    return (
        <div>
            <FetchMovies searchQuery={'star wars'} />
        </div>
    )
}

export default SearchMovies