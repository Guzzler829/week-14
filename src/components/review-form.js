import React from 'react';
import ReactStars from 'react-stars';

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    submitReview() {

    }

    render() {
        return (
            <div className='row'>
                <div className='review-form-container'>
                    <ReactStars 
                        count={5}
                        size={32}
                        color2={'#ffd700'}
                    />
                    <p>Tell us what you think of this movie:</p>
                    <input type='form' className='review-input'></input><br />
                    <button className='btn btn-submit' onClick={this.submitReview}>Submit</button>
                </div>
            </div>
            
        );
    }
}