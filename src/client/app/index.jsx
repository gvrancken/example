import React from 'react'
import ReactDOM from 'react-dom'
import Howler from 'howler'
import Axios from 'axios'

import SplashScreen from './components/SplashScreen.jsx'
import Newspaper from './components/Newspaper.jsx'
import Game from './components/Game.jsx'

import SoundPlayer from './components/Soundplayer'

import BackgroundImg from './assets/application/background.png'
import gameData from './data/gamedata'

import {preloadImages} from './components/helpers'
import {errorHandler} from './components/helpers'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      userId: -1,
      isSoundConfirmed: false,
      isGameStarted: false,
      isGameOver: false,
      soundsLoadProgress: 0,
      imagesLoadProgress: 0,
    }

    this.soundPlayer = new SoundPlayer()
    this.loadedData = null
  }

  componentDidMount() {
    if (DEBUG) { // set starting debug state
      this.setState({
        userId: "dummy",
        isLoggedIn: true,
        isSoundConfirmed: true,
        isGameStarted: true
      })
    }

    // get data from api
    const apiUrl = (DEBUG) ? './api/api.dev.json' : './api/api.json'
    Axios.get(apiUrl).then((res, err) => {
      if (err) { errorHandler(err); return }
      this.loadedData = res.data

      // preload images
      const imageUrls = gameData.images.map ( (image) => {
        return image.url
      })
      preloadImages(imageUrls, (progress) => {
        this.setState({
          imagesLoadProgress: progress
        })
      })

      // preload all audio files (local assets + cms added)
      const audioFiles = this.loadedData.audio.map( (audioObj) => {
        audioObj.url = gameData.config.audioUrlPrefix + audioObj.fileName
        return audioObj
      })
      if (DEBUG) audioFiles.length = 0
      const allSounds = gameData.sounds.concat(audioFiles)
      this.soundPlayer.preload(allSounds, (progress) => {
        this.setState({
          soundsLoadProgress: progress
        })
      })
    })
  }

  componentWillUnmount() {
    this.soundPlayer.unload()
    this.soundPlayer = null
  }

  playSound(sample, doLoop, cbOnEnd) {
    this.soundPlayer.play(sample, doLoop, cbOnEnd)

  }
  stopSound(sample) {
    this.soundPlayer.stop(sample)
  }

  doLogin() {
    this.setState({
      isLoggedIn: true
    })
  }

  confirmSound() {
    this.setState({isSoundConfirmed: true})
    this.soundPlayer.stop("TestSound")
  }

  startGame() {
    this.setState({isGameStarted: true})
  }

  render() {
    let content = null

    if (!this.state.isLoggedIn) {
      content = (
        <button onClick={this.doLogin.bind(this)}>Log-in</button>
      )
    } else if (!this.state.isSoundConfirmed) {
      content = (
        <SplashScreen isConfigLoaded={this.state.isConfigLoaded}
          soundPlayer={this.soundPlayer}
          loadProgress={(this.state.imagesLoadProgress+this.state.soundsLoadProgress)/2}
          onClose={this.confirmSound.bind(this)} />
      )
    } else if (!this.state.isGameStarted) {
      content = (
        <Newspaper onClose={this.startGame.bind(this)} />
      )
    } else if (this.state.imagesLoadProgress + this.state.soundsLoadProgress >= 2) {
      content = (
        <Game data={this.loadedData}
          stopSound={this.stopSound.bind(this)}
          playSound={this.playSound.bind(this)} />
      )
    }

    return (
      <div style={{
        position: 'relative',
        width: '1280px',
        height: '605px',
        fontFamily: 'Verdana',
        fontSize: '12px',
        overflow: 'hidden',
        margin: 'auto',
        background: 'url('+BackgroundImg+') 0 0',
      }}>
      {content}
      </div>

    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept()
}
