import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/UserInfo4.module.scss';

function UserInfo4() {
  const [username, setUsername] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [work, setWork] = useState('');

  const allInputsFilled = username && sex && birth && height && weight && work;

  return (
    <div className={styles['userinfo1']}>
      <Header name='ユーザー情報(4/4)' />
      <div className={styles['margin-area']}>
        <div className={styles['userinfo-message']}>
          <p>さぁまもなく運動開始です。</p>
          <p>ニックネームと目標を記入しましょう！</p>
        </div>
        <header className={styles['userinfo-header']}>
          <div className={styles['userinfo-wrapper']}>
            <div className={styles['userinfo-group']}>
              <label htmlFor='username'>ニックネーム</label>
              <input
                className={styles['input-box']}
                id='username'
                placeholder='入力してください'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles['userinfo-group']}>
              <label htmlFor='sex'>性別</label>
              <select
                className={styles['input-box']}
                id='sex'
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option>選択してください</option>
                <option>男</option>
                <option>女</option>
                <option>その他</option>
              </select>
            </div>
            <div className={styles['userinfo-group']}>
              <label htmlFor='birth'>生年月日</label>
              <input
                className={styles['input-box']}
                id='birth'
                type='date'
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
              <label htmlFor='height'>身長</label>
              <select
                className={styles['input-box']}
                id='height'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              >
                <option>選択してください</option>
                <option>150cm</option>
                <option>160cm</option>
                <option>170cm</option>
              </select>
            </div>
            <div className={styles['userinfo-group']}>
              <label htmlFor='weight'>体重</label>
              <select
                className={styles['input-box']}
                id='weight'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              >
                <option>選択してください</option>
                <option>50kg</option>
                <option>60kg</option>
                <option>70kg</option>
              </select>
            </div>
            <div className={styles['userinfo-group']}>
              <label htmlFor='work'>職業</label>
              <select
                className={styles['input-box']}
                id='work'
                value={work}
                onChange={(e) => setWork(e.target.value)}
              >
                <option>選択してください</option>
                <option>会社員</option>
                <option>主婦</option>
                <option>学生</option>
                <option>その他</option>
              </select>
            </div>
          </div>

          {allInputsFilled ? (
            <Link
              to='/userinfo4'
              className={`${styles.button} ${styles['-primary']}`}
            >
              次へ
            </Link>
          ) : (
            <button
              className={`${styles.button} ${styles['-primary']} ${styles['-disabled']}`}
              disabled
            >
              次へ
            </button>
          )}
        </header>
      </div>
    </div>
  );
}

export default UserInfo4;
