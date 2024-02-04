import React from 'react';
import styles from './styles/Hamberger.module.scss';
import userImg from './assets/img/user-img.png';
import badge from './assets/img/badge.png';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function Hamburger(props: Props) {
  return (
    <div className={styles['app']}>
      <div
        className={`${styles['menu-container']} ${
          props.isMenuOpen ? styles['open'] : ''
        }`}
      >
        <div className={styles['user-name']}>
          <img src={userImg} alt='userImg' />
          <div className={styles['user-name-wrapper']}>
            <div className={styles['user-name-box']}>
              <p>ヒッティ</p>
              <img src={badge} alt='badge' />
            </div>
            <p>無料プラン</p>
          </div>
        </div>
        <div className={styles['menu-title']}>メニュー</div>
        <ul className={styles['list-style']}>
          <li>レベル設定・変更</li>
          <li>HIITとは</li>
          <li>進捗状況</li>
          <li>ガイドライン</li>
          <li>みんなの掲示板</li>
          <li>グループ</li>
          <li>アカウント</li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
