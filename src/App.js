import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: props.songs,
      song: '',
      currentSong: 0
    }
  }

  //song description
  pickedSong = (song) => {
    this.setState({
      song: song
    })
  }

  changeSong = (index) => {
    this.setState({
      currentSong: index
    }, () => {
      this.audioElement.load()
      this.audioElement.play()
    })
  }

  nextSong = () => {
    this.changeSong(this.state.currentSong + 1)
    if (this.state.currentSong === this.state.songs.length - 1) {
      this.setState({
        currentSong: 0
      })
    }
  }

  previousSong = () => {
    this.changeSong(this.state.currentSong - 1)
    if (this.state.currentSong === 0) {
      this.setState({
        currentSong: this.state.songs.length - 1
      })
    }
  }

  render() {
    return (
      <div className="container">
        {/* <button onClick={this.state.playing ? this.pauseSong : this.playSong}>Play/Pause</button> */}
        <Switch>
          <Route path='/' exact render={(state) =>
            <SongsList songs={this.state.songs}
              pickedSong={this.pickedSong} changeSong={this.changeSong} />} />
          <Route path='/songdetails/:songId' render={(props) =>
            <SongDetails songs={this.state.songs} {...props}
              changeSong={this.changeSong} />} />
        </Switch>

        <div className="buttonsApp">
          <button type="button" className="btn btn-primary btn-sm" id="backforButton" onClick={this.previousSong} >
            <span className="glyphicon glyphicon-chevron-left" ></span>
          </button>

          <button type="button" className="btn btn-primary btn-sm" id="backforButton" onClick={this.nextSong} >
            <span className="glyphicon glyphicon-chevron-right" ></span>
          </button>

          <span className="currentPlay">PLAYING / {this.props.songs[this.state.currentSong].title}</span>
        </div>


        <span>
          <audio id="myaudio" className="center-block" displayText="track1" controls ref={(audio) => { this.audioElement = audio }}>
            <source src={this.props.songs[this.state.currentSong].source} type="audio/mpeg" />
          </audio>
        </span>
      </div>
    );
  }
}

export default App;
