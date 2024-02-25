import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/Break.module.scss';
import HorizontalBreakVideo from './HorizontalBreakVideo';

interface ExerciseItem {
  text: string; // あなたの実際のデータ構造に基づいてこの型を調整してください
  // その他のプロパティがある場合はここに追加します
}

function Break() {
  const [hiitTasks, setHiitTasks] = useState<ExerciseItem[]>([]);
  const [trainingTasks, setTrainingTasks] = useState<ExerciseItem[]>([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [currentIndex, setCurrentIndex] = useState<number>(0); // currentIndexの型を明示的に指定

  useEffect(() => {
    const hiitTasks = localStorage.getItem('hiitTasks');
    const trainingTasks = localStorage.getItem('trainingTasks');
    const selectedActivity = localStorage.getItem('selectedActivity');
    const selectedLevel = localStorage.getItem('selectedLevel');
    const storedIndex = localStorage.getItem('currentIndex'); // currentIndexをローカルストレージから読み込む

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
      setCurrentIndex(parseInt(storedIndex, 10)); // 文字列から数値に変換して設定
    }
  }, []);

  return (
    <div className={styles['userinfo1']}>
      <div className={styles['margin-area']}>
        <div className={styles['main']}>
          {selectedActivity === 'hiit' && hiitTasks.length > 0 ? (
            <HorizontalBreakVideo
              exerciseName={hiitTasks[currentIndex].text} // currentIndex + 1からcurrentIndexに変更
            />
          ) : selectedActivity === 'training' && trainingTasks.length > 0 ? (
            <HorizontalBreakVideo
              exerciseName={trainingTasks[currentIndex].text} // currentIndex + 1からcurrentIndexに変更
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
