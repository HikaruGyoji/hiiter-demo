import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/LevelSetting.module.scss';

function LevelSetting() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='レベル設定・変更' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <ul className={styles['info-ul']}>
            <li>レベル設定・変更</li>
            <li>レベル設定・変更</li>
            <li>レベル設定・変更</li>
          </ul>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default LevelSetting;