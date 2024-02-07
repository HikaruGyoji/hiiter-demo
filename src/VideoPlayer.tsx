import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles/VideoPlayer.module.scss';

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
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={src}
        id='MainPlay'
        playing={isPlaying} // 再生を制御する
        loop={false}
        controls={false}
        width='300px'
        height='200px'
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? '一時停止' : '再生'}
        </button>
        <button onClick={handleFastForward}>早送り</button>
        <button onClick={handleRewind}>速戻し</button>
        <p className={styles['time-text']}>
          残りの再生時間: {Math.ceil(duration - playedSeconds)} 秒
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
