
export function formatTime(seconds) {
    const formattedMinutes = Math.round(Math.floor(seconds / 60))
    const formattedSeconds = Math.round(seconds) % 60
    const formattedString = ('0'+formattedMinutes).slice(-2)+':'+('0'+formattedSeconds).slice(-2)
    return formattedString
}

export function formattedTimetoSeconds(timeString) {
    if (timeString.length != 5) {
      console.log("Error formattedTimetoSeconds: Can only handle 5 letter string time.");
      return
    }
    const minutes = Number(timeString.slice(0,2))
    const seconds = Number(timeString.slice(3))
    return minutes * 60 + seconds
}

export function preloadImages(images, cbProgress) {
  let count = 0
	images.forEach((src) => {
		let img = new Image()
		img.onload = () => {
  		count++;
      cbProgress(count / images.length)
  	}
		img.onerror = (err) => {
    	console.log("error preloadImages", err)
  	}
		img.src = src
	})
}

export function errorHandler(err) {
  alert(err)
}
