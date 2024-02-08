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
          <ul className={styles['info-ul']}>
            <li>アカウント</li>
            <li>アカウント</li>
            <li>アカウント</li>
          </ul>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
