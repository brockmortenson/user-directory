import React from 'react';

const Card = (props) => {
    const {data, index} = props

    return(
        <div className='card'>
            <div className='card-number'>
                <h2>{data[index].id}</h2>
            </div>
            <h2>{data[index].name.first} {data[index].name.last}</h2>
            <h3>From: {data[index].city}, {data[index].country}</h3>
            <h3>Job Title: {data[index].title}</h3>
            <h3>Employer: {data[index].employer}</h3>
            <ol>Favorite Movies: 
                <li>{data[index].favoriteMovies[0]}</li>
                <li>{data[index].favoriteMovies[1]}</li>
                <li>{data[index].favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}


export default Card