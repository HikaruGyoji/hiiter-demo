import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Account.module.scss';

function Account() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='アカウント' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <div className={styles['temp']}>
            <p className={styles['text']}>この画面は未実装です。</p>
          </div>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
