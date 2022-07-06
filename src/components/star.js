import React from 'react';
import ReactStars from 'react-stars'
import { render } from 'react-dom'

export default class Stars extends React.Component {
    ratingChanged (newRating) {
        console.log(newRating)
    }
    
    // render() {
    //     return (
    //         <ReactStars
    //             count={5}
    //             onChange={this.ratingChanged}
    //             size={24}
    //             color2={'#ffd700'}
    //         />
    //     )
    // }
    // render(){
    //     return (
    //         <div className='star'>
    //             <div className='star-gold'></div>
    //         </div>
    //     );
    // }
}