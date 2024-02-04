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
        <ul>
          <li>メニューアイテム1</li>
          <li>メニューアイテム2</li>
          <li>メニューアイテム3</li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
