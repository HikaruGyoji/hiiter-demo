import { Link } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import muscle from './assets/img/muscle.png';
import health from './assets/img/health.png';
import diet from './assets/img/diet.png';
import physical from './assets/img/physical.png';
import stress from './assets/img/stress.png';
import custom from './assets/img/custom.png';
import styles from './styles/UserInfo3.module.scss';

import React, { useState } from 'react'; // React を追加

function UserInfo3() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]); // stringの配列であることを明示的に指定

  const handleCardClick = (title: string) => {
    const newSelectedCards = selectedCards.includes(title)
      ? selectedCards.filter((selectedTitle) => selectedTitle !== title)
      : [...selectedCards, title];

    setSelectedCards(newSelectedCards);
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='ユーザー情報(3/4)' />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>運動の悩みを選んでください</p>
        <span className={styles['userinfo-span']}>複数選択可</span>
        <header className={styles['userinfo-header']}>
          <div className={styles['userinfo1-wrapper']}>
            <div className={styles['card-boxes']}>
              <Card
                img={diet}
                title={'ダイエット'}
                isSelected={selectedCards.includes('ダイエット')}
                onClick={handleCardClick}
              />
              <Card
                img={muscle}
                title={'筋力アップ'}
                isSelected={selectedCards.includes('筋力アップ')}
                onClick={handleCardClick}
              />
            </div>
            <div className={styles['card-boxes']}>
              <Card
                img={physical}
                title={'持久力（体力）をつけたい'}
                isSelected={selectedCards.includes('持久力（体力）をつけたい')}
                onClick={handleCardClick}
              />
              <Card
                img={health}
                title={'健康維持'}
                isSelected={selectedCards.includes('健康維持')}
                onClick={handleCardClick}
              />
            </div>
            <div className={styles['card-boxes']}>
              <Card
                img={stress}
                title={'ストレス解消'}
                isSelected={selectedCards.includes('ストレス解消')}
                onClick={handleCardClick}
              />
              <Card
                img={custom}
                title={'運動習慣を付けたい'}
                isSelected={selectedCards.includes('運動習慣を付けたい')}
                onClick={handleCardClick}
              />
            </div>
          </div>

          {selectedCards.length > 0 ? (
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

export default UserInfo3;
