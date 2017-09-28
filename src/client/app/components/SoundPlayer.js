
export default class SoundPlayer {
  constructor() {
    this.sounds = {}
  }

  preload(soundsArray, cbProgress) {
    let numSoundsLoaded = 0
    soundsArray.map ( (sound) => {
      this.sounds[sound.id] = new Howl({
        src: sound.url,
        preload: true,
        onload: () => {
          numSoundsLoaded++
          cbProgress(numSoundsLoaded/soundsArray.length)
        }
      })
    })
  }

  play(sample, doLoop, cbOnEnd) {
    if (!this.sounds[sample]) {
      console.log('sample ' + sample + ' not found.')
      if (cbOnEnd) cbOnEnd()
      return
    }
    if (cbOnEnd) {
      this.sounds[sample].once('end', cbOnEnd)
    }
    this.sounds[sample].loop(doLoop)
    this.sounds[sample].play()
  }

  stop(sample) {
    if (!this.sounds[sample]) return
    this.sounds[sample].off('end')
    this.sounds[sample].stop()
  }

  unload() {
    for (let sound in this.sounds) {
      this.sounds[sound].unload()
    }
  }
}
