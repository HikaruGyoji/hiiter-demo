import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/CoolDown.module.scss';
import VideoPlayer from './VideoPlayer';
import React, { useState, useEffect, useRef } from 'react';

import testVideo from './assets/video/test.mp4';

function CoolDown() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1); // 初期値を-1に設定する

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex < 20 ? nextIndex : prevIndex;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      const selectedElement = listRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedIndex]);

  return (
    <div className={styles['userinfo1']}>
      <Header name='クールダウン' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <div className={styles['userinfo-header']}>
          <VideoPlayer src={testVideo} />
        </div>
      </div>
      <div className={styles['container']}>
        <ul ref={listRef}>
          {[...Array(20)].map((_, index) => (
            <li
              key={index}
              className={index === selectedIndex ? styles['selected'] : ''}
            >
              クールダウン
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['userinfo-header']}>
        <Link
          to='/complete'
          className={`${styles.button} ${styles['-primary']}`}
        >
          次へ
        </Link>
      </div>
    </div>
  );
}

export default CoolDown;