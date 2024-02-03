import styles from './styles/Footer.module.scss';
import { Link } from 'react-router-dom';
import home from './assets/img/home.png';
import group from './assets/img/group.png';
import analysis from './assets/img/analysis.png';
import account from './assets/img/account.png';

function Footer() {
  return (
    <footer className={styles['footer-wrapper']}>
      <div className={styles['display-setting']}>
        <div className={styles['img-wrapper']}>
          <img src={home} alt='home' />
          <span>ホーム</span>
        </div>
        <div className={styles['img-wrapper']}>
          <img src={group} alt='group' />
          <span>グループ</span>
        </div>
        <div className={styles['img-wrapper']}>
          <img src={analysis} alt='analysis' />
          <span>進捗状況</span>
        </div>
        <div className={styles['img-wrapper']}>
          <img src={account} alt='account' />
          <span>アカウント</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
