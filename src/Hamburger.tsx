import React, { useEffect, useState } from 'react';
import styles from './styles/Hamberger.module.scss';
import userImg from './assets/img/user-img.png';
import badge from './assets/img/badge.png';
import { Link } from 'react-router-dom';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function Hamburger(props: Props) {
  const [userProfile, setUserProfile] = useState<{ username: string } | null>(
    null
  );

  useEffect(() => {
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      setUserProfile(JSON.parse(profile)); // 文字列をオブジェクトに変換してセット
    }
  }, []);

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
              <p>{userProfile?.username ? userProfile.username : 'ヒッティ'}</p>
              <img src={badge} alt='badge' />
            </div>
            <p>無料プラン</p>
          </div>
        </div>
        <div className={styles['menu-title']}>メニュー</div>
        <ul className={styles['list-style']}>
          <li>
            <Link to='/levelsetting'>レベル設定・変更</Link>
          </li>
          <li>
            <Link to='/explainhiit'>HIITとは</Link>
          </li>
          <li>
            <Link to='/progress'>進捗状況</Link>
          </li>
          <li>
            <Link to='/guidline'>ガイドライン</Link>
          </li>
          <li>
            {' '}
            <Link to='/bulletinboard'>みんなの掲示板</Link>
          </li>

          <li>
            <Link to='/group'>グループ</Link>
          </li>
          <li>
            <Link to='/account'>アカウント</Link>
          </li>
          <li>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfbgDF44y9zVPvXICUdkYW6owaf8qvpcuEOpQXo8xBxUd3gyA/viewform?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              デモアンケート
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
