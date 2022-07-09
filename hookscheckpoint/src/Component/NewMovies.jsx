import React, {Component} from "react";
import girlinthepicture from '../MoviesPhoto/girlinthepicture.jpg'

class NewMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newmovie: [
                {
                    image: girlinthepicture,
                    title: "Girl In the Picture",
                    description: "Crime< Documentry",
                    posterUrl: "www.f-zmovies.net",
                    year: "2022",
                    rating: "5.2"
                },
            ],

            visible: false,
            picture: "",
            title: "",
            date: "",
        };

        newMovie = () => {
            this.setState({
                addedmovie: [
                    ...this.state.newmovie,
                    {
                        picture: this.state.picture,
                        title: this.state.title,
                        date: this.state.date,
                        star: this.state.star,
                    },
                ],
            });
        };

        addMovie = (event) => {
            this.setState({
                visible: true,
            });
        };

        closeMovie = (event) => {
            this.setState({
                visible: false,
            });
        };

        render();
        return <div></div>;
    }
}

export default NewMovie;