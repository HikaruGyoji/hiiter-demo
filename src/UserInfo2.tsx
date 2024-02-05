import { Link } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import easy from './assets/img/easy.png';
import normal from './assets/img/normal.png';
import difficult from './assets/img/difficult.png';
import React, { useState } from 'react';
import styles from './styles/UserInfo2.module.scss';

function UserInfo2() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null); // Nullable string

  const handleCardClick = (title: string) => {
    if (selectedCard === title) {
      // If the same card is clicked again, unselect it
      setSelectedCard(null);
    } else {
      // Replace the previously selected card with the newly selected one
      setSelectedCard(title);
    }
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='ユーザー情報(2/4)' backPath='/userinfo1' icons={false} />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>運動レベルを選んでください</p>
        <span className={styles['userinfo-span']}>
          ユーザー情報は後からでも変更できます。
        </span>
        <br />
        <header className={styles['userinfo-header']}>
          <div className={styles['userinfo1-wrapper']}>
            <div className={styles['card-boxes']}>
              <Card
                img={easy}
                title={'初級'}
                isSelected={selectedCard === '初級'}
                onClick={handleCardClick}
              />
              <Card
                img={normal}
                title={'中級'}
                isSelected={selectedCard === '中級'}
                onClick={handleCardClick}
              />
            </div>
            <div className={styles['card-boxes']}>
              <Card
                img={difficult}
                title={'上級'}
                isSelected={selectedCard === '上級'}
                onClick={handleCardClick}
              />
            </div>
          </div>

          {selectedCard ? (
            <Link
              to='/userinfo3'
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

export default UserInfo2;
