import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SongsList extends Component {

    render() {
        let songs = this.props.songs
        let playlistJSX = songs.map((song, i) => {
            return (
                <div className="container">
                <li className="list" key={i}>

                    <button type="button" className="btn btn-primary btn-sm" id="playbutton" onClick={() => { this.props.changeSong(i) }} >
                        <span className="glyphicon glyphicon-play" ></span>
                    </button>

                    <Link to={`/songdetails/${i}`}>{song.title}</Link>
              
                </li>
                </div>
            )
        })
        return (
            <div className="container">
                <h1>T H E / L I S T</h1>
                <hr />
                    {playlistJSX}
            </div>
        )
    }
}


export default SongsList;