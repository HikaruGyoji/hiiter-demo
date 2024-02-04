import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Home.module.scss';
import news1 from './assets/img/news1.png';
import news2 from './assets/img/news2.png';
import news3 from './assets/img/news3.png';

function Home() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='ホーム' backPath='/explainhiit' icons={true} />
      <div className={styles['margin-area']}>
        <p>こんにちはヒッティさん</p>
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
        <p>運動設定</p>
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
