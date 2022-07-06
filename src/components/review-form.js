import React from 'react';
import ReactStars from 'react-stars';

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
        this.submitReview = this.submitReview.bind(this);

        this.theInput = React.createRef();
        this.theStars = React.createRef();
    }

    submitReview() {

        let inputValue = this.theInput.current.value;
        let starValue = this.theStars.current.state.value;
        this.setState( state => {
            state.reviews.push({text: inputValue,
                                rating: starValue});
            this.theInput.current.value = "";
            return {reviews: state.reviews};
        });
    }

    

    render() {
        return (
            <div className='row'>
                <div className='review-form-container'>
                    <p>Tell us what you think of this movie:</p>
                    <ReactStars 
                        count={5}
                        size={32}
                        color2={'#ffd700'}
                        ref={this.theStars}
                    />
                    <input ref={this.theInput} type='form' className='review-input'></input><br />
                    <button className='btn btn-submit' onClick={this.submitReview}>Submit</button>
                </div>
            </div>
            
        );
    }
}