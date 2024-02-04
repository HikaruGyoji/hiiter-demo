import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Information.module.scss';

function Information() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='お知らせ' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <ul className={styles['info-ul']}>
            <li>アップデートのお知らせ</li>
            <li>アップデートのお知らせ</li>
            <li>アップデートのお知らせ</li>
          </ul>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Information;
