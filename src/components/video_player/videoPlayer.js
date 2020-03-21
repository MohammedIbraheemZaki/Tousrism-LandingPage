import React from 'react';
import poster from '../../Images/videoBlaceholde.jpg';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

function Video(){
  return(
    <Player
      poster={poster}
      autoPlay={false}
      >
       <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <ControlBar>
        <ReplayControl disabled seconds={10} order={1.1} />
        <ForwardControl disabled seconds={30} order={1.2} />
        <CurrentTimeDisplay disabled order={4.1} />
        <TimeDivider disabled order={4.2} />
        <PlaybackRateMenuButton disabled rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
  )
}

export default Video;