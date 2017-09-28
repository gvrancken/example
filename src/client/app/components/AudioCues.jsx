import React from 'react'

export default class AudioCues extends React.Component {
    constructor(props) {
        super(props)

        this.audioCues = this.props.audioCues
    }
    componentDidUpdate() {
        this.activeAudioCue = this.audioCues.find( (elem) => {
            return elem.time < this.props.timeInSeconds
        })

        if (this.activeAudioCue) {
            this.playAudioCue(this.activeAudioCue)
        }
    }
    playAudioCue(audioCue) {
        this.props.playSound(audioCue.audiofileId)
        this.audioCues = this.audioCues.filter( cue => cue.id != audioCue.id )
    }
    render() {
        return null
    }
}
