import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/LevelSetting.module.scss';
import ScrollableTable from './ScrollableTable';

const data = [
  {
    Lv: 1,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 1,
    recommend: false,
  },
  {
    Lv: 2,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 2,
    recommend: false,
  },
  {
    Lv: 3,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 3,
    recommend: false,
  },
  {
    Lv: 4,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 4,
    recommend: true,
  },
  {
    Lv: 5,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 4,
    recommend: false,
  },
  {
    Lv: 6,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 4,
    recommend: false,
  },
  {
    Lv: 7,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 4,
    recommend: false,
  },
  {
    Lv: 8,
    type: ['スクワット', 'プッシュアップ', 'バックエクステンション'],
    count: 4,
    recommend: false,
  },
];

function LevelSetting() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='レベル設定・変更' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>運動レベルを選んでください</p>
        <span className={styles['userinfo-span']}>
          運動レベルはいつでも変更できます。
        </span>
        <ScrollableTable data={data} onSelectLevel={handleSelectLevel} />
        <div className={styles['userinfo-header']}>
          {selectedLevel ? (
            <Link
              to='/home'
              className={`${styles.button} ${styles['-primary']}`}
            >
              決定
            </Link>
          ) : (
            <button
              className={`${styles.button} ${styles['-primary']} ${styles['-disabled']}`}
              disabled
            >
              決定
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LevelSetting;
