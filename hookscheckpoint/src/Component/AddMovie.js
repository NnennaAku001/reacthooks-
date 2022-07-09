import React, { Component } from 'react'

import { Button, Form, Modal } from 'react-bootstrap';

class AddMovies extends Component {
    constructor(){
        super();
        this.state = {
            movie: {
                image: "",
                title: "",
                description: "",
                posterUrl: "",
                year: "",
                rating: ""
            }
        }
    }

    changeHandler = (e) => {
        this.setState ({
            movie: {
                ...this.state.movie,
                [e.target.name]: e.target.value,
            },
        })
    }

    click = () => {
        this.props.addItem(this.state.movie);
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <Button className="add-btn" color="success" onClick={this.props.toggle}> + </Button>
                <Modal isOpen={this.props.modal}>
                    <Modal.Header>New Movie</Modal.Header>
                    <Modal.Body>
                        <Form.Label for="Movie Name">
                            Adding Movie
                        </Form.Label>
                        <Form 
                            type="text"
                            name="image"
                            id = "movie"
                            description = "description"
                            posterUrl = "url"
                            placeholder="Enter movie image"
                            onChange = {this.changeHandler}
                        />
                        <Form 
                            type="text"
                            name="image"
                            id = "movie"
                            description = "description"
                            posterUrl = "url"
                            placeholder="Enter movie image"
                            onChange = {this.changeHandler}
                        />
                        <Form 
                            type="text"
                            name="image"
                            id = "movie"
                            description = "description"
                            posterUrl = "url"
                            placeholder="Enter movie image"
                            onChange = {this.changeHandler}
                        />
                        <Form 
                            type="text"
                            name="image"
                            id = "movie"
                            description = "description"
                            posterUrl = "url"
                            placeholder="Enter movie image"
                            onChange = {this.changeHandler}
                        />
                        <Form 
                            type="text"
                            name="image"
                            id = "movie"
                            description = "description"
                            posterUrl = "url"
                            placeholder="Enter movie image"
                            onChange = {this.changeHandler}
                        />
                    </Modal.Body>
                    <Modal.Footer className="buttons">
                        <Button
                        className="submit-btn"
                        color="success"
                        onClick={this.click}
                        // onClick={() => this.props.toggle()}
                        >
                        Submit
                        </Button>{" "}
                        <Button
                        className="cancel-btn"
                        color="danger"
                        onClick={() => this.props.toggle()}
                        >
                        Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddMovies