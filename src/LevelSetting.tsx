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

  useEffect(() => {
    localStorage.setItem('selectedActivity', selectedActivity);
  }, [selectedActivity]);

  useEffect(() => {
    localStorage.setItem('selectedCourse', selectedCourse);
  }, [selectedCourse]);

  useEffect(() => {
    console.log(selectedActivity);
  }, [selectedActivity]);

  useEffect(() => {
    console.log(selectedCourse);
  }, [selectedCourse]);

  // @ts-ignore
  const path = data[selectedActivity][selectedCourse];

  useEffect(() => {
    if (selectedLevel !== null) {
      localStorage.setItem('selectedLevel', selectedLevel.toString());
    }
  }, [selectedLevel]);

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
          <Link to='/home' className={`${styles.button} ${styles['-primary']}`}>
            決定
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LevelSetting;
