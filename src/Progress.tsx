import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Progress.module.scss';

function Progress() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='進捗状況' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <ul className={styles['info-ul']}>
            <li>進捗</li>
            <li>進捗</li>
            <li>進捗</li>
          </ul>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Progress;
