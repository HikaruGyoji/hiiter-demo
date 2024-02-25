import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from './styles/Exercise.module.scss';
import HorizontalVideo from './HorizontalVideo';

interface ExerciseItem {
  text: string;
}

function Exercise() {
  const [hiitTasks, setHiitTasks] = useState<ExerciseItem[]>([]);
  const [trainingTasks, setTrainingTasks] = useState<ExerciseItem[]>([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const storedIndex = localStorage.getItem('currentIndex');
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const hiitTasks = localStorage.getItem('hiitTasks');
    const trainingTasks = localStorage.getItem('trainingTasks');
    const selectedActivity = localStorage.getItem('selectedActivity');
    const selectedLevel = localStorage.getItem('selectedLevel');

    if (hiitTasks) {
      setHiitTasks(JSON.parse(hiitTasks));
    }

    if (trainingTasks) {
      setTrainingTasks(JSON.parse(trainingTasks));
    }

    if (selectedActivity) {
      setSelectedActivity(selectedActivity);
    }
  }, []);

  return (
    <div className={styles['userinfo1']}>
      <div className={styles['margin-area']}>
        <div className={styles['main']}>
          {selectedActivity === 'hiit' && hiitTasks.length > 0 ? (
            <HorizontalVideo
              exerciseName={hiitTasks[currentIndex].text}
              isLastItem={currentIndex === hiitTasks.length - 1}
            />
          ) : selectedActivity === 'training' && trainingTasks.length > 0 ? (
            <HorizontalVideo
              exerciseName={trainingTasks[currentIndex].text}
              isLastItem={currentIndex === trainingTasks.length - 1}
            />
          ) : (
            <div>No tasks available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exercise;
