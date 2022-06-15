var musicLevel = 'NONE'
var audio = document.createElement('audio')

/* Artist : Kevin MacLeod and Reinsamba
Song : Rain thunder and piano (mixed by plugnplay)

Rain and thunder by Reinsamba
https: freesound.org/people/reinsamba/sounds/17084/

Mixed by Plugnplaymusic
https:www.youtube.com/plugnplaymusic */

audio.setAttribute('src', 'FocusStudyLofi.mp3')
audio.setAttribute('loop', 'true')

  function audio_control() {
    switch (musicLevel) {
      case 'NONE':
        audio.play()
        audio.volume = 0.25
        musicLevel = 'LOW'
        break
      case 'LOW':
        audio.volume = 0.5
        musicLevel = 'MEDIUM'
        break
        case 'MEDIUM':
          audio.volume = 1.0
          musicLevel = 'MAX'
          break
      case 'MAX':
        audio.pause()
        musicLevel = 'NONE'
        break
    }

    browser.browserAction.setIcon({
  path: {
    "38": "icons/studyLofi_" + musicLevel + "_38.png",
    "19": "icons/studyLofi_" + musicLevel + "_19.png",
  }
})

}

browser.browserAction.onClicked.addListener(audio_control)
