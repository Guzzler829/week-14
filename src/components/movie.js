import React from 'react';
import Star from './star';

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            imageURL: props.imageURL,
            synopsis: props.synopsis,
            rating: 0,
            releaseDate: props.releaseDate,
            director: props.director,
            starActors: props.starActors
        };
    }


    render(){
        return (
            <div className='movie-container'>
                <img src={this.state.imageURL} />
                <div className='row title-and-rating'>
                    <h3 className='movie-title'>{this.state.title}</h3>
                    <div className='star-container'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
                <p className='movie-synopsis'>{this.state.synopsis}</p>
                <p className='movie-info'><span className='bold-text'>Director: </span>{this.state.director}</p>
                <p className='movie-info'><span className='bold-text'>Release date: </span>{this.state.releaseDate}</p>
                <p className='movie-info'><span className='bold-text'>Stars: </span>{this.state.starActors}</p>                
            </div>
        );
    }
}