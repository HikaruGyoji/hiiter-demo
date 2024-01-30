import React, { useState, useEffect, ChangeEvent } from 'react';
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

  useEffect(() => {
    const sexElement = document.getElementById(
      'sex'
    ) as HTMLSelectElement | null;
    const heightElement = document.getElementById(
      'height'
    ) as HTMLSelectElement | null;
    const weightElement = document.getElementById(
      'weight'
    ) as HTMLSelectElement | null;
    const workElement = document.getElementById(
      'work'
    ) as HTMLSelectElement | null;

    if (sexElement) {
      changeColor(sexElement);
    }
    if (heightElement) {
      changeColor(heightElement);
    }
    if (weightElement) {
      changeColor(weightElement);
    }
    if (workElement) {
      changeColor(workElement);
    }
  }, []);

  const handleSexChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSex(e.target.value);
    changeColor(e.target);
  };
  const handleHeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setHeight(e.target.value);
    changeColor(e.target);
  };
  const handleWeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWeight(e.target.value);
    changeColor(e.target);
  };
  const handleWorkChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWork(e.target.value);
    changeColor(e.target);
  };

  const changeColor = (element: HTMLInputElement | HTMLSelectElement) => {
    if (element !== null) {
      if (element.value === '') {
        element.style.color = '#8e8e8e';
      } else {
        element.style.color = 'black';
      }
    } else {
      return;
    }
  };

  // 身長の選択肢を生成
  const heightOptions = [];
  for (let i = 130; i <= 200; i++) {
    heightOptions.push(
      <option key={i} value={i}>
        {i}cm
      </option>
    );
  }

  // 体重の選択肢を生成
  const weightOptions = [];
  for (let i = 30; i <= 150; i++) {
    weightOptions.push(
      <option key={i} value={i}>
        {i}kg
      </option>
    );
  }

  const allInputsFilled = username && sex && birth && height && weight && work;

  return (
    <div className={styles['userinfo1']}>
      <Header name='ユーザー情報(4/4)' backPath='/userinfo3' />
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
                onChange={(e) => handleSexChange(e)}
              >
                <option value='' disabled>
                  選択してください
                </option>
                <option value='男'>男</option>
                <option value='女'>女</option>
                <option value='その他'>その他</option>
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
                onChange={(e) => handleHeightChange(e)}
              >
                <option value='' disabled>
                  選択してください
                </option>
                {heightOptions}
              </select>
            </div>
            <div className={styles['userinfo-group']}>
              <label htmlFor='weight'>体重</label>
              <select
                className={styles['input-box']}
                id='weight'
                value={weight}
                onChange={(e) => handleWeightChange(e)}
              >
                <option value='' disabled>
                  選択してください
                </option>
                {weightOptions}
              </select>
            </div>
            <div className={styles['userinfo-group']}>
              <label htmlFor='work'>職業</label>
              <select
                className={styles['input-box']}
                id='work'
                value={work}
                onChange={(e) => handleWorkChange(e)}
              >
                <option value='' disabled>
                  選択してください
                </option>
                <option value='会社員'>会社員</option>
                <option value='主婦'>主婦</option>
                <option value='学生'>学生</option>
                <option value='その他'>その他</option>
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
