import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Home.module.scss';
import news1 from './assets/img/news1.png';
import news2 from './assets/img/news2.png';
import news3 from './assets/img/news3.png';
import { useState } from 'react';
import Popup from './Popup';

function Home() {
  const [hiitClicked, setHiitClicked] = useState(true);
  const [lowStrengthClicked, setLowStrengthClicked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleHiitClick = () => {
    setHiitClicked(true);
    setLowStrengthClicked(false);
    setIsPopupOpen(true);
  };

  const handleLowStrengthClick = () => {
    setHiitClicked(false);
    setLowStrengthClicked(true);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='ホーム' backPath='/explainhiit' icons={true} />
      <div className={styles['margin-area']}>
        <p className={styles['hello-message']}>こんにちはヒッティさん</p>
        <div className={styles['news-wrapper']}>
          <a href='https://www.nikkei.com/article/DGXMZO11481080Q7A110C1000000/'>
            <img src={news1} alt='news1' />
            <p>新着記事</p>
          </a>
          <a href='https://www.nikkei.com/article/DGXMZO11481080Q7A110C1000000/'>
            <img src={news2} alt='news2' />
            <p>新着イベント</p>
          </a>
          <a href='https://www.nikkei.com/article/DGXMZO11481080Q7A110C1000000/'>
            <img src={news3} alt='news2' />
            <p>新着豆知識</p>
          </a>
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
            <span>
              Lv4<small>（オススメ）</small>
            </span>
            <button className={`${styles.button} ${styles['-secondary']}`}>
              変更はこちら
            </button>
          </div>
        </div>
        <div className={styles['active-setting2']}>
          <p>運動タイプ</p>
          <div>
            <div
              className={`${styles.setbutton} ${
                hiitClicked ? styles['clicked'] : ''
              }`}
              onClick={handleHiitClick}
            >
              <p>HIIT</p>
              <span>いつものトレーニング</span>
            </div>
            <div
              className={`${styles.setbutton} ${
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
          <Link
            to='/warmingup'
            className={`${styles.button} ${styles['-primary']}`}
          >
            運動開始
          </Link>
        </header>
      </div>
      <Footer />
      {isPopupOpen && (
        <Popup
          type={hiitClicked ? 'HIIT' : '低強度'}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default Home;
