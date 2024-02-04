import React from 'react';
import styles from './styles/Hamberger.module.scss'; // スタイルシートのインポート

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
        <div className={styles['user-name']}>test</div>
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
