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

  // @ts-ignore
  const path = data[selectedActivity][selectedCourse];

  useEffect(() => {
    if (selectedLevel !== null) {
      localStorage.setItem('selectedLevel', selectedLevel.toString());
    }
  }, [selectedLevel]);

  useEffect(() => {
    if (selectedCourse && selectedLevel) {
      // @ts-ignore
      const selectedCourseData = data['hiit'][selectedCourse];
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
  }, [selectedCourse, selectedLevel]);

  useEffect(() => {
    localStorage.setItem('hiitTasks', JSON.stringify(tasks));
  }, [tasks]);

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
        <p className={styles['userinfo-text']}>レベルを選んでください</p>
        <LevelButtonSelector onSelectCourse={handleSelectCourse} />
        <ActivityButtonSelector onSelectActivity={handleSelectActivity} />
        <ScrollableTable
          data={path}
          selectedLevel={selectedLevel}
          onSelectLevel={handleSelectLevel}
        />
        <div className={styles['userinfo-header']}>
          <Link
            to='/home'
            className={`${styles.button} ${styles['-primary']}`}
            onClick={() =>
              localStorage.setItem('hiitTasks', JSON.stringify(tasks))
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
