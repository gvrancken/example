import React from 'react'

import Kladblok from './Kladblok.jsx'
import Logboek from './Logboek.jsx'
import ActionTab from './ActionsTab.jsx'
import TrainMap from './TrainMap.jsx'
import Protocols from './ProtocolsTab.jsx'
import Score from './Score.jsx'
import Clock from './Clock.jsx'
import Instructions from './Instructions.jsx'
import LogTasksBar from './LogTasksBar.jsx'
import AudioCues from './AudioCues.jsx'
import ClickTracker from './ClickTracker.jsx'

import gameData from '../data/gamedata'

const Stations = gameData.stations

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logEntries: [],
      data: [],
      isActionsTabOpen: false,
      request: 0,
      timeInSeconds: 0,
      score: 0,
      clickData: { }
    }

    this.data = this.props.data

    this.clickTasks = this.sanitizeData(this.data.clickTasks)
    this.trainPositions = this.sanitizeData(this.data.trainPositions)
    this.calamities = this.sanitizeData(this.data.calamities)
    this.audioCues = this.sanitizeData(this.data.audiocues)
    this.logTasks = this.sanitizeData(this.data.logTasks)
    this.instructions = this.sanitizeData(this.data.instructions)

    // connect info about stations from back-end to game data (positions)
    this.stations = gameData.stationPositions.map( (pos) => {
      let s = this.data.stations.find( station => station.id === pos.id )
      pos.name = s.name
      return pos
    })
  }

  sanitizeData(data) {
    const sanitizedData = data.map( (elem, i) => {
      elem.time = Number(elem.time)
      elem.duration = Number(elem.duration)
      elem.id = elem.id || i
      return elem
    })
    return sanitizedData
  }

  componentDidMount() {
    this.startTime = new Date().getTime()
    this.setState({
      isGameStarted: true,
      request: requestAnimationFrame(() => {this.update()})
    })
    this.props.playSound("BackgroundLoop", true)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.request)
  }

  update() {
    this.setState({
      request: requestAnimationFrame(this.update.bind(this)),
      timeInSeconds: (new Date().getTime() - this.startTime) / 1000,
    })
  }

  addLogEntry(entry) {
    const logEntries = this.state.logEntries
    logEntries.push(entry)
    this.setState({
      logEntries: logEntries
    })
  }

  openActionTab() {
    if (!!this.state.isActionsTabOpen) {
      this.setState({isActionsTabOpen: false})
      this.props.playSound('TabClose')
    } else {
      this.setState({isActionsTabOpen: true})
      this.props.playSound('TabOpen')
    }
  }

  setTrackingData(key, payload) {
    let clickData = this.state.clickData
    if (!payload) {
      // simply add to number of clicks
      clickData[key] = clickData[key] || 0
      clickData[key] = clickData[key] + 1
    } else {
      // it's a data object
      clickData[key] = clickData[key] || []
      // are we already tracking this id? if so, we update data of it
      let updateItem = clickData[key].find( el => el.id === payload.id )
      if (updateItem) {
        updateItem = payload
      } else {
        // otherwise it's a new item
        clickData[key].push(payload)
      }
    }
    this.setState({clickData: clickData})
  }

  changeScore(scoringKey) {
    let score = this.state.score
    score += Number(this.data.scoringValues[scoringKey])
    if (score < 0) score=0
    this.setState({score:score})
  }

  render() {
    return (
      <div>
      <Clock
      timeInSeconds={this.state.timeInSeconds} />
      <Score
      value={this.state.score} />
      <TrainMap clickTasks={this.clickTasks}
      timeInSeconds={this.state.timeInSeconds}
      changeScore={this.changeScore.bind(this)}
      playSound={this.props.playSound.bind(this)}
      stopSound={this.props.stopSound.bind(this)}
      isActionsTabOpen={this.state.isActionsTabOpen}
      stations={this.stations}
      trains={this.data.trains}
      setTrackingData={this.setTrackingData.bind(this)}
      trainPositions={this.trainPositions} />
      <Protocols
      playSound={this.props.playSound.bind(this)}
      protocols={this.data.protocols}
      timeInSeconds={this.state.timeInSeconds}
      setTrackingData={this.setTrackingData.bind(this)} />
      <ActionTab
      actors={gameData.actors}
      actions={gameData.actions}
      setTrackingData={this.setTrackingData.bind(this)}
      calamities={this.calamities}
      timeInSeconds={this.state.timeInSeconds}
      playSound={this.props.playSound.bind(this)}
      stopSound={this.props.stopSound.bind(this)}
      isOpen={this.state.isActionsTabOpen}
      changeScore={this.changeScore.bind(this)}
      onClick={this.openActionTab.bind(this)} />
      <Kladblok
      items={gameData.actors.concat(gameData.actions)}
      setTrackingData={this.setTrackingData.bind(this)}
      playSound={this.props.playSound.bind(this)} />
      <AudioCues
      audioCues={this.audioCues}
      timeInSeconds={this.state.timeInSeconds}
      playSound={this.props.playSound.bind(this)} />
      <Logboek
      trains={this.data.trains}
      setTrackingData={this.setTrackingData.bind(this)}
      timeInSeconds={this.state.timeInSeconds}
      logTasks={this.logTasks}
      stations={this.stations}
      changeScore={this.changeScore.bind(this)}
      playSound={this.props.playSound.bind(this)} />
      <Instructions
      timeInSeconds={this.state.timeInSeconds}
      playSound={this.props.playSound.bind(this)}
      instructions={this.instructions} />
      <LogTasksBar
      trains={this.data.trains}
      changeScore={this.changeScore.bind(this)}
      timeInSeconds={this.state.timeInSeconds}
      logTasks={this.data.logTasks} />
      <ClickTracker
      userId={this.state.userId}
      timeInSeconds={this.state.timeInSeconds}
      clickData={this.state.clickData} />
      </div>
    )
  }
}
