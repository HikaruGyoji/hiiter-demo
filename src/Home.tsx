import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Home.module.scss';
import news1 from './assets/img/news1.png';
import news2 from './assets/img/news2.png';
import news3 from './assets/img/news3.png';

function Home() {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [userProfile, setUserProfile] = useState<{ username: string } | null>(
    null
  );
  const [isLandscape, setIsLandscape] = useState<boolean>(
    // 初回のレンダリング時にウィンドウの向きを検出する
    window.innerWidth < window.innerHeight
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // 初期化時にも実行
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    handleHiitClick();
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      setUserProfile(JSON.parse(profile)); // 文字列をオブジェクトに変換してセット
    }
  }, []);

  useEffect(() => {
    // localStorage から selectedLevel を取得する
    const level = localStorage.getItem('selectedLevel');
    if (level) {
      setSelectedLevel(level);
    }
  }, []); // コンポーネントがマウントされた時のみ実行する

  useEffect(() => {
    const course = localStorage.getItem('selectedCourse');
    if (course) {
      setSelectedCourse(course);
    }
  }, []);

  useEffect(() => {
    const activity = localStorage.getItem('selectedActivity');
    if (activity) {
      setSelectedActivity(activity);
    }
  }, []);

  const handleHiitClick = () => {
    setSelectedActivity('hiit'); // selectedActivityを'hiit'に設定
    localStorage.setItem('selectedActivity', 'hiit'); // localStorageに'hiit'をセット
  };

  const handleLowStrengthClick = () => {
    setSelectedActivity('training'); // selectedActivityを'hiit'に設定
    localStorage.setItem('selectedActivity', 'training'); // localStorageに'hiit'をセット
  };
  return (
    <div className={styles['userinfo1']}>
      {isLandscape && (
        <>
          <Header name='ホーム' backPath='/explainhiit' icons={true} />
          <div className={styles['margin-area']}>
            <p className={styles['hello-message']}>
              こんにちは&nbsp;
              {userProfile?.username ? userProfile.username : 'ヒッティ'}
              さん
            </p>
            <div className={styles['news-wrapper']}>
              <a
                href='https://www.nikkei.com/article/DGXMZO11481080Q7A110C1000000/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={news1} alt='news1' />
                <p>新着記事</p>
              </a>
              <a
                href='https://www.nikkei.com/article/DGXMZO11481080Q7A110C1000000/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={news2} alt='news2' />
                <p>新着イベント</p>
              </a>
              <a
                href='https://www.nikkei.com/article/DGXMZO11481080Q7A110C1000000/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={news3} alt='news2' />
                <p>新着豆知識</p>
              </a>
            </div>
            <p>3月の運動状況</p>
            <div className={styles['active-info']}>
              <div>
                <p>連続回数</p>
                <span>10</span>
              </div>
              <div>
                <p>回数/月</p>
                <span>2</span>
              </div>
            </div>
            <p>運動設定</p>
            <div className={styles['active-setting1']}>
              <div>
                <p>目的</p>
                <span>ダイエット</span>
                <Link
                  to='/typesetting'
                  className={`${styles.button} ${styles['-secondary']}`}
                >
                  変更はこちら
                </Link>
              </div>
              <div>
                <p>レベル</p>
                <span>
                  {selectedCourse} Lv{selectedLevel || 4}
                </span>
                <Link
                  to='/levelsetting'
                  className={`${styles.button} ${styles['-secondary']}`}
                >
                  変更はこちら
                </Link>
              </div>
            </div>
            <div className={styles['active-setting2']}>
              <p>タイプ</p>
              <div>
                <Link
                  to='/hiitsetting'
                  className={`${styles.setbutton} ${
                    selectedActivity === 'hiit' ? styles['clicked'] : ''
                  }`}
                  onClick={handleHiitClick}
                >
                  <p>HIIT</p>
                  <span>いつものトレーニング</span>
                </Link>
                <Link
                  to='/trainingsetting'
                  className={`${styles.setbutton} ${
                    selectedActivity !== 'hiit' ? styles['clicked'] : ''
                  }`}
                  onClick={handleLowStrengthClick}
                >
                  <p>低強度</p>
                  <span>やる気がない時はこちら</span>
                </Link>
              </div>
            </div>
            <header className={styles['userinfo-header']}>
              <Link
                to={selectedActivity === 'hiit' ? '/exercise' : '/training'}
                className={`${styles.button} ${styles['-primary']}`}
              >
                運動開始
              </Link>
            </header>
          </div>
          <Footer />
        </>
      )}

      {!isLandscape && (
        <div className={styles['message-container']}>
          <p className={styles['message']}>画面を縦向きにしてください</p>
        </div>
      )}
    </div>
  );
}

export default Home;
