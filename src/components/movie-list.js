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
                <Movie
                    title='My Neighbor Totoro'
                    imageURL='https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg'
                    synopsis='This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.'
                    releaseDate='May 7, 1993 (USA)'
                    director='Hayao Miyazaki'
                    starActors='N/A'
                />
                <Movie
                    title='The Terminator'
                    imageURL='https://m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA@@._V1_.jpg'
                    synopsis='Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape.'
                    releaseDate='October 26, 1984'
                    director='James Cameron'
                    starActors='Arnold Schwarzenegger; Linda Hamilton; Michael Biehn'
                />
                <Movie
                    title='Blazing Saddles'
                    imageURL='https://m.media-amazon.com/images/M/MV5BZGZmMWE1MDYtNzAyNC00MDMzLTgzZjQtNTQ5NjYzN2E4MzkzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg'
                    synopsis='In this satirical take on Westerns, crafty railroad worker Bart (Cleavon Little) becomes the first black sheriff of Rock Ridge, a frontier town about to be destroyed in order to make way for a new railroad. Initially, the people of Rock Ridge harbor a racial bias toward their new leader. However, they warm to him after realizing that Bart and his perpetually drunk gunfighter friend (Gene Wilder) are the only defense against a wave of thugs sent to rid the town of its population.'
                    releaseDate='February 7, 1974'
                    director='Mel Brooks'
                    starActors='Cleavon Little; Gene Wilder; Slim Pickens; Alex Karras; Mel Brooks; Harvey Korman; Madeline Kahn'
                />
                <Movie
                    title='Shrek'
                    imageURL='https://upload.wikimedia.org/wikipedia/en/7/7b/Shrek_%282001_animated_feature_film%29.jpg'
                    synopsis="Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad (John Lithgow). Determined to save their home -- not to mention his -- Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona (Cameron Diaz) to be Farquaad's bride. Rescuing the Princess may be small compared to her deep, dark secret."
                    releaseDate='April 22, 2001'
                    director='Andrew Adamson, Vicky Jenson'
                    starActors='Mike Myers; Eddie Murphy; Cameron Diaz; John Lithgow'
                />
                <Movie
                    title=''
                    imageURL=''
                    synopsis=''
                    releaseDate=''
                    director=''
                    starActors=''
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