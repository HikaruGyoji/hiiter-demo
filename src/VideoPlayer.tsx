// VideoPlayer.jsx
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles/VideoPlayer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

interface Exercise {
  time: number;
  exercise: string;
}

interface VideoPlayerProps {
  src: string;
  trainingMenu: Exercise[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, trainingMenu }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>(0);

  useEffect(() => {
    const selectedLi = document.getElementById(
      `exercise-${selectedExerciseIndex}`
    );
    if (selectedLi) {
      selectedLi.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedExerciseIndex]);

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
    updateSelectedExerciseIndex(progress.playedSeconds);
  };

  const updateSelectedExerciseIndex = (currentTime: number) => {
    for (let i = 0; i < trainingMenu.length; i++) {
      if (currentTime >= trainingMenu[i].time) {
        if (
          i === trainingMenu.length - 1 ||
          currentTime < trainingMenu[i + 1].time
        ) {
          setSelectedExerciseIndex(i);
          return;
        }
      }
    }
    setSelectedExerciseIndex(0);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleExerciseItemClick = (index: number) => {
    const selectedExercise = trainingMenu[index];
    if (selectedExercise) {
      playerRef.current?.seekTo(selectedExercise.time);
    }
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
        playing={isPlaying}
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
      <div className={styles['container']}>
        <ul>
          {trainingMenu.map((exercise, index) => (
            <li
              key={index}
              id={`exercise-${index}`}
              className={
                index === selectedExerciseIndex ? styles['selected'] : ''
              }
              onClick={() => handleExerciseItemClick(index)}
            >
              {exercise.exercise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;
