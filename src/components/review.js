import React from 'react';
import ReactStars from 'react-stars';

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: props.rating,
            text: props.text,
            dateSubmitted: props.dateSubmitted
        }
    }

    ratingChanged (newRating) {
        console.log(newRating)
    }

    render(){
        return (
            <div className='review-container'>
                <ReactStars 
                    count={5}
                    edit={false}
                    value={this.state.rating}
                    size={24}
                    color2={'#ffd700'}
                />
                <p className='dateSubmitted'>{this.state.dateSubmitted}</p>
                <p className='review-text'>{this.state.text}</p>
            </div>
        );
    }
}