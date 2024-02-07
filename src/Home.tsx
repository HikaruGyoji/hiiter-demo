import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Home.module.scss';
import news1 from './assets/img/news1.png';
import news2 from './assets/img/news2.png';
import news3 from './assets/img/news3.png';
import { useState } from 'react';

function Home() {
  const [hiitClicked, setHiitClicked] = useState(true);
  const [lowStrengthClicked, setLowStrengthClicked] = useState(false);

  const handleHiitClick = () => {
    setHiitClicked(true);
    setLowStrengthClicked(false);
  };

  const handleLowStrengthClick = () => {
    setHiitClicked(false);
    setLowStrengthClicked(true);
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='ホーム' backPath='/explainhiit' icons={true} />
      <div className={styles['margin-area']}>
        <p className={styles['hello-message']}>こんにちはヒッティさん</p>
        <div className={styles['news-wrapper']}>
          <div>
            <img src={news1} alt='news1' />
            <p>記事（イベント情報・豆知識）タイトルや概要などを載せる</p>
          </div>
          <div>
            <img src={news2} alt='news2' />
            <p>記事（イベント情報・豆知識）タイトルや概要などを載せる</p>
          </div>
          <div>
            <img src={news3} alt='news2' />
            <p>記事（イベント情報・豆知識）タイトルや概要などを載せる</p>
          </div>
        </div>
        <p>2月の運動状況</p>
        <div className={styles['active-info']}>
          <div>
            <p>連続回数</p>
            <span>1200</span>
          </div>
          <div>
            <p>回数/月</p>
            <span>18</span>
          </div>
        </div>
        <p>運動設定</p>
        <div className={styles['active-setting1']}>
          <div>
            <p>タイプ</p>
            <span>ダイエット</span>
            <button className={`${styles.button} ${styles['-secondary']}`}>
              変更はこちら
            </button>
          </div>
          <div>
            <p>運動レベル</p>
            <span>オススメは Lv4</span>
            <button className={`${styles.button} ${styles['-secondary']}`}>
              変更はこちら
            </button>
          </div>
        </div>
        <div className={styles['active-setting2']}>
          <p>運動タイプ</p>
          <div>
            <div
              className={`${styles.hittbutton} ${
                hiitClicked ? styles['clicked'] : ''
              }`}
              onClick={handleHiitClick}
            >
              <p>HIIT</p>
              <span>いつものトレーニング</span>
            </div>
            <div
              className={`${styles.lowstrength} ${
                lowStrengthClicked ? styles['clicked'] : ''
              }`}
              onClick={handleLowStrengthClick}
            >
              <p>低強度</p>
              <span>やる気がない時はこちら</span>
            </div>
          </div>
        </div>
        <header className={styles['userinfo-header']}>
          <Link to='/' className={`${styles.button} ${styles['-primary']}`}>
            運動開始
          </Link>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
