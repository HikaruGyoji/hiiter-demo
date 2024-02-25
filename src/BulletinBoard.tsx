import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/BulletinBoard.module.scss';

function BulletinBoard() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='みんなの掲示板' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <p className={styles['text']}>この画面は未実装です。</p>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default BulletinBoard;
