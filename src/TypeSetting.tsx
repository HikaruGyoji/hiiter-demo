import { Link } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import muscle from './assets/img/muscle.png';
import health from './assets/img/health.png';
import diet from './assets/img/diet.png';
import physical from './assets/img/physical.png';
import stress from './assets/img/stress.png';
import custom from './assets/img/custom.png';
import React, { useState } from 'react';
import styles from './styles/TypeSetting.module.scss';

function TypeSetting() {
  const [selectedCard, setSelectedCard] = useState<string | null>('ダイエット');

  const handleCardClick = (title: string) => {
    if (selectedCard === title) {
      setSelectedCard(null);
    } else {
      setSelectedCard(title);
    }
  };

  return (
    <div className={styles['type-setting']}>
      <Header name='目的設定' backPath='/home' icons={false} />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>運動目的を選んでください</p>
        <span className={styles['userinfo-span']}>
          運動目的はいつでも変更できます。
        </span>
        <header className={styles['userinfo-header']}>
          <div className={styles['TypeSetting-wrapper']}>
            <div className={styles['card-boxes']}>
              <Card
                img={diet}
                title={'ダイエット'}
                isSelected={selectedCard === 'ダイエット'}
                onClick={() => handleCardClick('ダイエット')}
                width='80px'
                height='55px'
              />
              <Card
                img={muscle}
                title={'筋力アップ'}
                isSelected={selectedCard === '筋力アップ'}
                onClick={() => handleCardClick('筋力アップ')}
                width='60px'
                height='60px'
              />
            </div>
            <div className={styles['card-boxes']}>
              <Card
                img={physical}
                title={'持久力（体力）をつけたい'}
                isSelected={selectedCard === '持久力（体力）をつけたい'}
                onClick={() => handleCardClick('持久力（体力）をつけたい')}
                width='70px'
                height='55px'
              />
              <Card
                img={health}
                title={'健康維持'}
                isSelected={selectedCard === '健康維持'}
                onClick={() => handleCardClick('健康維持')}
                width='65px'
                height='50px'
              />
            </div>
            <div className={styles['card-boxes']}>
              <Card
                img={stress}
                title={'ストレス解消'}
                isSelected={selectedCard === 'ストレス解消'}
                onClick={() => handleCardClick('ストレス解消')}
                width='60px'
                height='60px'
              />
              <Card
                img={custom}
                title={'運動習慣を付けたい'}
                isSelected={selectedCard === '運動習慣を付けたい'}
                onClick={() => handleCardClick('運動習慣を付けたい')}
                width='60px'
                height='60px'
              />
            </div>
          </div>

          {selectedCard ? (
            <Link
              to='/home'
              className={`${styles.button} ${styles['-primary']}`}
            >
              決定
            </Link>
          ) : (
            <button
              className={`${styles.button} ${styles['-primary']} ${styles['-disabled']}`}
              disabled
            >
              決定
            </button>
          )}
        </header>
      </div>
    </div>
  );
}

export default TypeSetting;
