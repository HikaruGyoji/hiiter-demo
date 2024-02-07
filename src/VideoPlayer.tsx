import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles/VideoPlayer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFastForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
    }
  };

  const handleRewind = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
    }
  };

  const handleProgress = (progress: { playedSeconds: number }) => {
    setPlayedSeconds(progress.playedSeconds);
    if (progress.playedSeconds >= duration) {
      setIsPlaying(false);
    }
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles['vide-padding']}>
      <ReactPlayer
        ref={playerRef}
        url={src}
        id='MainPlay'
        playing={isPlaying} // 再生を制御する
        loop={false}
        controls={false}
        width='350px'
        height='250px'
        onProgress={handleProgress}
        onDuration={handleDuration}
        playsinline
      />
      <div>
        <p className={styles['time-text']}>
          {formatTime(duration - playedSeconds)}
        </p>

        <div className={styles['icons']}>
          <FontAwesomeIcon
            icon={faBackwardStep}
            className={styles['control-button']}
            onClick={handleRewind}
          />
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            className={`${styles['control-button']} ${
              isPlaying
                ? styles['control-button-pause']
                : styles['control-button-play']
            }`}
            onClick={handlePlayPause}
          />
          <span className={styles['control-button-background']}></span>
          <FontAwesomeIcon
            icon={faForwardStep}
            className={styles['control-button']}
            onClick={handleFastForward}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
