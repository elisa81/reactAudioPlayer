import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SongDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: props.songs,
            song: '',
        }
    }


    render() {
        let i = this.props.match.params.songId
        return (
            <div className="container">
                <h1>T H E / D E T A I L S</h1>
                <hr />
                {/* <button type="button" onClick={() => { this.props.changeSong(i) }}>
                    <img src="./playicon.png" style={{ height: "20px" }} /></button> */}

                <button type="button" className="btn btn-primary btn-sm" id="playDetails" onClick={() => { this.props.changeSong(i) }} >
                    <span className="glyphicon glyphicon-play" ></span>
                </button>

                <span className="title">S O N G / T I T L E / {this.props.songs[this.props.match.params.songId].title}</span>
                <br />
                <div className="container-description">
                    <p>{this.props.songs[this.props.match.params.songId].description}</p>
                </div>
                <p> Go back to <Link to='/'> *Song List* </Link></p>
            </div>
        )
    }
}

export default SongDetails;