import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

import Movelist from './MovieList';
import AddMovie from './AddMovie';
import comingtoamerica from '../MoviesPhoto/comingtoamerica.jpg'
import girlinthepicture from '../MoviesPhoto/girlinthepicture.jpg'
import prettywoman from '../MoviesPhoto/prettywoman.jpg'
import soundofmusic from '../MoviesPhoto/soundofmusic.jpg'
import Thor from '../MoviesPhoto/Thor.jpg'





class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    image: comingtoamerica,
                    title: "Coming to america",
                    description: "Comedy  Movie",
                    posterUrl: "www.f-zmovies.net",
                    year: "1988",
                    rating: "7"
                },
                {
                    image: girlinthepicture,
                    title: "Girl In the picture",
                    description: "Crime, Documentary",
                    posterUrl: "www.f-zmovies.net",
                    year: "2022",
                    rating: "4.2"
                },
                {
                    image: prettywoman,
                    title: "Pretty Woman",
                    description: "Romance",
                    posterUrl: "www.f-zmovies.net",
                    year: "1988",
                    rating: "6.0"
                },
                {
                    image: soundofmusic,
                    title: "Sound Of music",
                    description: "Musical, Romance, Comedy",
                    posterUrl: "www.f-zmovies.net",
                    year: "1965",
                    rating: "7.0"
                },
                {
                    image: thro,
                    title: "Thro",
                    description: "Action,Adeventure, Comedy",
                    posterUrl: "www.movies.com",
                    year: "2022",
                    rating: "7.0"
                },
                
            ],
            modal: false,
        };
    }
    toggle = () =>
        this.setState({
            modal: !this.state.modal
        });

    addMovie = (item) => {
        let newState = this.state.movies;
        newState.push(item);
        this.setState({
            movie: newState,
        })
    }


    render (){
        return (
            <div className="container">
                <Row>
                    {this.props.search 
                        ? this.state.movie
                            .filter((el) => 
                                el.title.match(this.props.search.toLowerCase().trim())
                        )
                        .map((element, key) => (
                            <Col key={key} sm={3}>
                                <Movelist movie={element} />
                            </Col>
                            ))
                        : this.props.rate 
                        ? this.state.movie
                            .filter((el) => {
                                return el.rating >= this.props.rate;
                            })
                        .map((element, key) => (
                                <Col key={key} sm={3}>
                                    <Movelist movie={element} />
                                </Col>
                            ))
                        : this.state.movie.map((element, key) =>(
                            <Col key={key} sm={3}>
                                <Movelist movie={element} />
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <AddMovie
                        modal = {this.state.modal}
                        toggle = {this.toggle}
                        addItem = {this.addMovie}
                    />
                </Row>
            </div>
        )
    }
}

export default MovieCard