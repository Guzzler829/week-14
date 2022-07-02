import React from 'react';
import ReactStars from 'react-stars'
import ReviewForm from './review-form';


export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            imageURL: props.imageURL,
            synopsis: props.synopsis,
            rating: 2.5,
            releaseDate: props.releaseDate,
            director: props.director,
            starActors: props.starActors,
            reviews: []
        };
    }

    ratingChanged (newRating) {
        console.log(newRating)
    }

    render(){
        return (
            <div className='movie-container'>
                <img src={this.state.imageURL} />
                <div className='row title-and-rating'>
                    <h2 className='movie-title'>{this.state.title}</h2>
                    <div className='star-container'>
                        <ReactStars
                            count={5}
                            value={this.state.rating}
                            edit={false}
                            size={36}
                            color2={'#ffd700'}
                        />
                    </div>
                </div>
                <p className='movie-synopsis'>{this.state.synopsis}</p>
                <p className='movie-info'><span className='bold-text'>Director: </span>{this.state.director}</p>
                <p className='movie-info'><span className='bold-text'>Release date: </span>{this.state.releaseDate}</p>
                <p className='movie-info'><span className='bold-text'>Stars: </span>{this.state.starActors}</p>   

                <div className='break'></div>

                <ReviewForm />
            </div>
        );
    }
}