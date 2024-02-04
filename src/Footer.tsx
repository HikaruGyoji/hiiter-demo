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
          <Link to='/home'>
            <img src={home} alt='home' />
          </Link>
          <span>ホーム</span>
        </div>
        <div className={styles['img-wrapper']}>
          <Link to='/home'>
            <img src={group} alt='group' />
          </Link>
          <span>グループ</span>
        </div>
        <div className={styles['img-wrapper']}>
          <Link to='/home'>
            <img src={analysis} alt='analysis' />
          </Link>
          <span>進捗状況</span>
        </div>
        <div className={styles['img-wrapper']}>
          <Link to='/home'>
            <img src={account} alt='account' />
          </Link>
          <span>アカウント</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
