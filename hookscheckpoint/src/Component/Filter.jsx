import React, { Component } from 'react';
import '../HookStyles/Style.css'


class Filter extends Component {
    render() {
        return (
            <div className="input-container">
                <input
                    placeholder="Searching for a movie...."
                    className="search"
                    onChange={this.props.look}
                    />
                <button className="btn">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    }
}

export default Filter