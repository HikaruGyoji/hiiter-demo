import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/Break.module.scss';
import HorizontalBreakVideo from './HorizontalBreakVideo';

interface ExerciseItem {
  text: string; // 実際のデータ構造に基づいてこの型を調整する
  // 他のプロパティがある場合はここに追加する
}

function Break() {
  const [hiitTasks, setHiitTasks] = useState<ExerciseItem[]>([]);
  const [trainingTasks, setTrainingTasks] = useState<ExerciseItem[]>([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLandscape, setIsLandscape] = useState<boolean>(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const hiitTasks = localStorage.getItem('hiitTasks');
    const trainingTasks = localStorage.getItem('trainingTasks');
    const selectedActivity = localStorage.getItem('selectedActivity');
    const selectedLevel = localStorage.getItem('selectedLevel');
    const storedIndex = localStorage.getItem('currentIndex');

    if (hiitTasks) {
      setHiitTasks(JSON.parse(hiitTasks));
    }

    if (trainingTasks) {
      setTrainingTasks(JSON.parse(trainingTasks));
    }

    if (selectedActivity) {
      setSelectedActivity(selectedActivity);
    }

    if (storedIndex) {
      setCurrentIndex(parseInt(storedIndex, 10));
    }
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.orientation === 90 || window.orientation === -90);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className={styles['userinfo1']}>
      <div className={styles['margin-area']}>
        <div
          className={
            isLandscape
              ? styles['main']
              : `${styles['main']} ${styles['-center']}`
          }
        >
          {selectedActivity === 'hiit' && hiitTasks.length > 0 ? (
            <HorizontalBreakVideo exerciseName={hiitTasks[currentIndex].text} />
          ) : selectedActivity === 'training' && trainingTasks.length > 0 ? (
            <HorizontalBreakVideo
              exerciseName={trainingTasks[currentIndex].text}
            />
          ) : (
            <div>No tasks available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Break;
