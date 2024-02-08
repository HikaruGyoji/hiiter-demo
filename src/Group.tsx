import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Group.module.scss';

function Group() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='グループ' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <ul className={styles['info-ul']}>
            <li>グループ</li>
            <li>グループ</li>
            <li>グループ</li>
          </ul>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Group;
