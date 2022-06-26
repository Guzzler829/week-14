import React from 'react';
import StarRating from './star-rating';

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: props.rating,
            title: props.title,
            text: props.text,
            dateSubmitted: props.dateSubmitted
        }
    }
    render(){
        return (
            <div className='review-container'>
                <StarRating rating={0} />
                <p className='dateSubmitted'>{this.state.dateSubmitted}</p>
                <h3 className='review-title'>{this.state.title}</h3>
                <p className='review-text'>{this.state.text}</p>
            </div>
        );
    }
}