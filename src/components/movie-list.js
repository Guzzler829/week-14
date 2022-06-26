import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render(){
        return (
            <div className='row movie-list-container'>
                <Movie 
                    title='Morbius'
                    imageURL='https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg'
                    synopsis='Dangerously ill with a rare blood disorder and determined to save others from the same fate, Dr. Morbius attempts a desperate gamble. While at first it seems to be a radical success, a darkness inside of him is soon unleashed.'
                    releaseDate='April 1, 2022'
                    director='Daniel Espinosa'
                    starActors='Jared Leto'
                />
                <Movie
                    title='Willy Wonka & the Chocolate Factory'
                    imageURL='https://upload.wikimedia.org/wikipedia/en/7/7f/WillyWonkaMoviePoster.jpg'
                    synopsis="A sweet boy from a poor family dreams of finding one of five golden tickets hidden inside chocolate bar wrappers which will admit him to the eccentric and reclusive Willy Wonka's magical factory. One after another, tickets are discovered by ghastly children - but will the lad find the last remaining one and have all his dreams come true?"
                    releaseDate='June 30, 1971'
                    director='Mel Stuart'
                    starActors='Gene Wilder'
                />
            </div>
        );
    }
}

/*
<Movie
    title=''
    imageURL=''
    synopsis=''
    releaseDate=''
    director=''
    starActors=''
/>
*/