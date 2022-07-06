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
        this.theReviewForm = React.createRef();
        this.setReviewList = this.setReviewList.bind(this);
    }

    componentDidMount() {
        this.setReviewList();
    }
    
    setReviewList() {
        this.setState({reviews: this.theReviewForm.current.state.reviews});
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
                    <h3>{this.state.rating}</h3>
                </div>
                <p className='movie-synopsis'>{this.state.synopsis}</p>
                <p className='movie-info'><strong>Director: </strong>{this.state.director}</p>
                <p className='movie-info'><strong>Release date: </strong>{this.state.releaseDate}</p>
                <p className='movie-info'><strong>Stars: </strong>{this.state.starActors}</p>   

                <div className='break'></div>

                <ReviewForm ref={this.theReviewForm}/>

                {this.state.reviews}
                
            </div>
        );
    }
}