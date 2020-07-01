import React from 'react'

const privateKey = process.env.REACT_APP_API_KEY
const host = 'imdb8.p.rapidapi.com'

function FetchMovies (props) {
    fetch(`https://imdb8.p.rapidapi.com/title/auto-complete?q=${props.searchQuery}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": `${host}`,
		"x-rapidapi-key": `${privateKey}`
	}
    })
    .then(response => {
        return response.json();
    })
    .then(info => console.log(info))
    .catch(err => {
        console.log(err);
    });

    
    return (
        <div>
            <h1>Placeholder</h1>
        </div>
    )
}

export default FetchMovies