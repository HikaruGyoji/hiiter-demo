import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate を追加

import ReactPlayer from 'react-player';
import styles from './styles/HorizontalVideo.module.scss';

import exercise1 from './assets/video/その場かけ足.mp4';
import exercise2 from './assets/video/ギャロップ＆フロアタッチ.mp4';
import exercise3 from './assets/video/サイドステップ＆もも上げその場かけ足.mp4';
import exercise4 from './assets/video/ジャンピングジャック＆シザーズ.mp4';
import exercise5 from './assets/video/シットアップ.mp4';
import exercise6 from './assets/video/スクワット.mp4';
import exercise7 from './assets/video/スクワット＆ジャンプ.mp4';
import exercise8 from './assets/video/スクワット＆フロントキック.mp4';
import exercise9 from './assets/video/スケーターズランジ.mp4';
import exercise10 from './assets/video/バックエクステンション.mp4';
import exercise11 from './assets/video/バーピージャンプ.mp4';
import exercise12 from './assets/video/プッシュアップ.mp4';
import exercise13 from './assets/video/マウンテンクライマー.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faHouse,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import data from '../src/demoData/levelSetting.json';

interface HorizontalVideoProps {
  exerciseName: string;
  isLastItem: boolean; // 追加
}

const HorizontalVideo: React.FC<HorizontalVideoProps> = ({
  exerciseName,
  isLastItem,
}) => {
  const navigate = useNavigate(); // useNavigate フックを使用

  const [src, setSrc] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(
    window.innerWidth > window.innerHeight
  );
  const [currentTime, setCurrentTime] = useState<number>(20);
  const [totalTime, setTotalTime] = useState<number>(100);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // 1. currentIndexを追加

  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<number | null>();

  const exerciseVideos: { [key: string]: string } = {
    その場かけ足: exercise1,
    'ギャロップ＆フロアタッチ': exercise2,
    'サイドステップ＆もも上げその場かけ足': exercise3,
    'ジャンピングジャック＆シザーズ': exercise4,
    シットアップ: exercise5,
    スクワット: exercise6,
    'スクワット＆ジャンプ': exercise7,
    'スクワット＆フロントキック': exercise8,
    スケーターズランジ: exercise9,
    バックエクステンション: exercise10,
    バーピージャンプ: exercise11,
    プッシュアップ: exercise12,
    マウンテンクライマー: exercise13,
  };

  useEffect(() => {
    const course = localStorage.getItem('selectedCourse');
    const activity = localStorage.getItem('selectedActivity');
    const level = localStorage.getItem('selectedLevel');

    if (course) setSelectedCourse(course);
    if (activity) setSelectedActivity(activity);
    if (level) setSelectedLevel(level);
  }, []);

  useEffect(() => {
    let totalDuration = 0;
    const selectedActivity = localStorage.getItem('selectedActivity');
    const hiitTasks = JSON.parse(localStorage.getItem('hiitTasks') || '[]');
    const trainingTasks = JSON.parse(
      localStorage.getItem('trainingTasks') || '[]'
    );

    if (selectedActivity === 'hiit') {
      totalDuration = hiitTasks.length * 20 + (hiitTasks.length - 1) * 10;
    } else if (selectedActivity === 'training') {
      totalDuration =
        trainingTasks.length * 20 + (trainingTasks.length - 1) * 10;
    }

    // currentIndex に応じてtotalTimeを調整する
    totalDuration -= currentIndex * 30;

    // totalTime を更新
    setTotalTime(totalDuration);
  }, [currentIndex]);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.orientation === 90 || window.orientation === -90);
    };

    // 初期化時にも実行
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    const savedIndex = localStorage.getItem('currentIndex'); // 2. localStorageから読み込む
    if (savedIndex !== null) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);

  useEffect(() => {
    if (exerciseName && exerciseVideos[exerciseName]) {
      setSrc(exerciseVideos[exerciseName]);
      setIsPlaying(true); // 動画を自動再生
    }
  }, [exerciseName]);

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex.toString()); // 3. localStorageに保存
  }, [currentIndex]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleActionClick = (action: string) => () => {
    if (action === 'Next') {
      if (isLastItem) {
        localStorage.setItem('currentIndex', '0');
        navigate('/complete'); // complete ページに遷移
      } else {
        setCurrentIndex((prevIndex) => {
          const newIndex = Math.min(
            prevIndex + 1,
            Object.keys(exerciseVideos).length - 1
          );
          localStorage.setItem('currentIndex', newIndex.toString());
          navigate('/break'); // setCurrentIndex内で遷移を行う
          return newIndex;
        });
      }
    } else if (action === 'Previous') {
      navigate('/break'); // setCurrentIndex内で遷移を行う
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleVideoEnded = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (isLastItem) {
        localStorage.setItem('currentIndex', '0');
        navigate('/complete'); // complete ページに遷移
      } else {
        localStorage.setItem('currentIndex', newIndex.toString());
        navigate('/break'); // setCurrentIndex内で遷移を行う
      }
      return isLastItem ? 0 : newIndex; // isLastItemの場合は0を返す
    });
  };

  const handleProgress = (state: any) => {
    if (!state.played) return; // playedが0の場合は初期化中のため何もしない

    const { playedSeconds, loadedSeconds } = state;
    setCurrentTime(20 - playedSeconds); // 動画の再生時間から現在の再生位置を引き算してcurrentTimeを設定
    let totalDuration = 0;
    const selectedActivity = localStorage.getItem('selectedActivity');
    const hiitTasks = JSON.parse(localStorage.getItem('hiitTasks') || '[]');
    const trainingTasks = JSON.parse(
      localStorage.getItem('trainingTasks') || '[]'
    );

    if (selectedActivity === 'hiit') {
      totalDuration = hiitTasks.length * 20 + (hiitTasks.length - 1) * 10;
    } else if (selectedActivity === 'training') {
      totalDuration =
        trainingTasks.length * 20 + (trainingTasks.length - 1) * 10;
    }

    // currentIndex に応じてtotalTimeを調整する
    totalDuration -= currentIndex * 30;

    setTotalTime(totalDuration - playedSeconds); // totalTimeを設定
  };

  useEffect(() => {
    let totalDuration = 0;
    const selectedActivity = localStorage.getItem('selectedActivity');
    const hiitTasks = JSON.parse(localStorage.getItem('hiitTasks') || '[]');
    const trainingTasks = JSON.parse(
      localStorage.getItem('trainingTasks') || '[]'
    );

    if (selectedActivity === 'hiit') {
      totalDuration = hiitTasks.length * 20 + (hiitTasks.length - 1) * 10;
    } else if (selectedActivity === 'training') {
      totalDuration =
        trainingTasks.length * 20 + (trainingTasks.length - 1) * 10;
    }

    // currentIndex に応じてtotalTimeを調整する
    totalDuration -= currentIndex * 30;

    setTotalTime(totalDuration); // totalTimeを設定
  }, []);

  useEffect(() => {
    if (selectedCourse === '初級' && selectedActivity === 'training') {
      const selectedCourseData = data['training']['初級'];
      const selectedItem = selectedCourseData.find(
        (item: { Lv: number }) => item.Lv === parseInt(selectedLevel)
      );
      if (selectedItem !== null) {
        setSelectedItem(selectedItem?.count);
      } else {
        setSelectedItem(null);
      }
    }
  }, [selectedCourse, selectedActivity, selectedLevel]);

  return (
    <div
      className={`${styles['horizontal-video']} ${
        isPlaying ? '' : styles['stopped']
      } ${isLandscape ? styles['background-primary'] : ''}`}
      onClick={handleClick}
    >
      <div className={styles['video-container']}>
        {isLandscape && src && (
          <>
            <ReactPlayer
              url={src}
              playing={isPlaying}
              loop={
                selectedCourse === '初級' && selectedActivity === 'training'
              }
              controls={false}
              width='100vw'
              height='100vh'
              playsinline
              onProgress={handleProgress}
              onEnded={handleVideoEnded}
            />

            {selectedCourse === '初級' && selectedActivity === 'training' ? (
              <>
                <div className={styles['caution-display']}>
                  終了したら画面をタップし次へ進んでください
                </div>
                <div className={styles['time-display']}>{selectedItem}回</div>
              </>
            ) : (
              <>
                <div className={styles['time-display']}>
                  {formatTime(currentTime)}
                </div>
                <div className={styles['all-time-display']}>
                  {formatTime(totalTime)}
                </div>
              </>
            )}

            {isLandscape && !isPlaying && (
              <Link
                to='/home'
                className={styles['home-button']}
                onClick={() => localStorage.setItem('currentIndex', '0')}
              >
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            )}
          </>
        )}
        {isLandscape && !isPlaying && (
          <div className={styles['controls-container']}>
            <div className={styles['button-text-wrapper']}>
              <span>前へ</span>
              <FontAwesomeIcon
                icon={faBackwardStep}
                className={styles['control-button']}
                onClick={handleActionClick('Previous')}
              />
            </div>

            <div className={styles['button-text-wrapper']}>
              <span>再生/停止</span>
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className={`${styles['control-button']} ${
                  isPlaying
                    ? styles['control-button-pause']
                    : styles['control-button-play']
                }`}
                onClick={handleActionClick('Play/Pause')}
              />
            </div>
            <div className={styles['button-text-wrapper']}>
              <span>次へ</span>
              <FontAwesomeIcon
                icon={faForwardStep}
                className={styles['control-button']}
                onClick={handleActionClick('Next')}
              />
            </div>
          </div>
        )}
      </div>
      {!isLandscape && (
        <div className={styles['message-container']}>
          <p className={styles['message']}>画面を横向きにしてください</p>
        </div>
      )}
    </div>
  );
};

export default HorizontalVideo;
