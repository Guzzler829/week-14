import React from 'react';

var starBarWidth = 0;

export default class StarRating extends React.Component {

    onMouseMove = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        //let y = e.clientY - rect.top;
        
        starBarWidth = Math.round(x);
        console.log(starBarWidth);
    };

    render(){
        return (
            <div className='star-container'>
                <div className='star-bar' style={{ width: starBarWidth }}></div>
                <img src='https://i.imgur.com/XRwjz1c.png' className='star-cutout' onMouseMove={this.onMouseMove} />
            </div>
        );
    }
}