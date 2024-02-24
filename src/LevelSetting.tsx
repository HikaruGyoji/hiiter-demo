import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/LevelSetting.module.scss';
import ScrollableTable from './ScrollableTable';
import LevelButtonSelector from './LevelButtonSelector';
import ActivityButtonSelector from './ActivityButtonSelector';
import data from '../src/demoData/levelSetting.json';

function LevelSetting() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(() => {
    const storedLevel = localStorage.getItem('selectedLevel');
    return storedLevel ? parseInt(storedLevel, 10) : 4;
  });

  const [selectedActivity, setSelectedActivity] = useState<string>(() => {
    const storedActivity = localStorage.getItem('selectedActivity');
    return storedActivity || 'hiit';
  });

  const [selectedCourse, setSelectedCourse] = useState<string>(() => {
    const storedCourse = localStorage.getItem('selectedCourse');
    return storedCourse || '初級';
  });

  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    localStorage.setItem('selectedActivity', selectedActivity);
  }, [selectedActivity]);

  useEffect(() => {
    localStorage.setItem('selectedCourse', selectedCourse);
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedLevel !== null) {
      localStorage.setItem('selectedLevel', selectedLevel.toString());
    }
  }, [selectedLevel]);

  useEffect(() => {
    if (selectedCourse && selectedLevel) {
      // @ts-ignore
      const selectedCourseData = data[selectedActivity][selectedCourse];
      if (selectedCourseData) {
        const selectedItem = selectedCourseData.find(
          // @ts-ignore
          (item: { Lv: number }) => item.Lv === parseInt(selectedLevel, 10)
        );
        if (selectedItem) {
          const initialTasks = [];
          for (
            let i = 0;
            i < selectedItem.type.length && i < selectedItem.maxSelected;
            i++
          ) {
            initialTasks.push({ id: `todo${i}`, text: selectedItem.type[i] });
          }
          setTasks(initialTasks);
        }
      }
    }
  }, [selectedCourse, selectedLevel, selectedActivity]);

  useEffect(() => {
    if (selectedActivity === 'hiit') {
      localStorage.setItem('hiitTasks', JSON.stringify(tasks));
    } else if (selectedActivity === 'training') {
      localStorage.setItem('trainingTasks', JSON.stringify(tasks));
    }
  }, [tasks, selectedActivity]);

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
  };

  const handleSelectActivity = (activity: string) => {
    setSelectedActivity(activity);
  };

  const handleSelectCourse = (course: string) => {
    setSelectedCourse(course);
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='レベル設定・変更' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>運動レベルを選択してください</p>
        <span className={styles['userinfo-span']}>コースを選択</span>
        <LevelButtonSelector onSelectCourse={handleSelectCourse} />
        <span className={styles['userinfo-span']}>タイプを選択</span>
        <ActivityButtonSelector onSelectActivity={handleSelectActivity} />
        <ScrollableTable
          // @ts-ignore
          data={data[selectedActivity][selectedCourse]}
          selectedLevel={selectedLevel}
          onSelectLevel={handleSelectLevel}
        />
        <div className={styles['userinfo-header']}>
          <Link
            to='/home'
            className={`${styles.button} ${styles['-primary']}`}
            onClick={() =>
              localStorage.setItem(
                selectedActivity === 'hiit' ? 'hiitTasks' : 'trainingTasks',
                JSON.stringify(tasks)
              )
            }
          >
            決定
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LevelSetting;
