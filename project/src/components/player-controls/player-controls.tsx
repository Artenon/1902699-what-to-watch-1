import { MutableRefObject } from 'react';
import ProgressBar from './controls/progress-bar';
import PlayButton from './controls/play-button';
import FullScreenButton from './controls/full-screen-button';
import './player-controls.css';

type PlayerControlsProps = {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  name: string;
  setIsWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerControls = ({videoRef, name, setIsWaiting}: PlayerControlsProps): JSX.Element => (
  <div className="player__controls">
    <ProgressBar videoRef={videoRef} />
    <div className="player__controls-row">
      <PlayButton videoRef={videoRef} setIsWaiting={setIsWaiting} />
      <div className="player__name">{name}</div>
      <FullScreenButton />
    </div>
  </div>
);

export default PlayerControls;
