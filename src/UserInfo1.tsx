import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';
import muscle from './assets/img/muscle.png';
import health from './assets/img/health.png';
import diet from './assets/img/diet.png';
import physical from './assets/img/physical.png';
import stress from './assets/img/stress.png';
import custom from './assets/img/custom.png';
import React, { useState } from 'react';

function UserInfo1() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    if (selectedCard === title) {
      setSelectedCard(null);
    } else {
      setSelectedCard(title);
    }
  };

  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(1/4)' />
      <div className='margin-area'>
        <p className='userinfo-text'>運動の目的を一つ選んでください</p>
        <span className='userinfo-span'>
          最も重視する項目を1つ選んでください
        </span>
        <header className='userinfo-header'>
          <div className='userinfo1-wrapper'>
            <div className='card-boxes'>
              <Card
                img={diet}
                title={'ダイエット'}
                isSelected={selectedCard === 'ダイエット'}
                onClick={() => handleCardClick('ダイエット')}
              />
              <Card
                img={muscle}
                title={'筋力アップ'}
                isSelected={selectedCard === '筋力アップ'}
                onClick={() => handleCardClick('筋力アップ')}
              />
            </div>
            <div className='card-boxes'>
              <Card
                img={physical}
                title={'持久力（体力）をつけたい'}
                isSelected={selectedCard === '持久力（体力）をつけたい'}
                onClick={() => handleCardClick('持久力（体力）をつけたい')}
              />
              <Card
                img={health}
                title={'健康維持'}
                isSelected={selectedCard === '健康維持'}
                onClick={() => handleCardClick('健康維持')}
              />
            </div>
            <div className='card-boxes'>
              <Card
                img={stress}
                title={'ストレス解消'}
                isSelected={selectedCard === 'ストレス解消'}
                onClick={() => handleCardClick('ストレス解消')}
              />
              <Card
                img={custom}
                title={'運動習慣を付けたい'}
                isSelected={selectedCard === '運動習慣を付けたい'}
                onClick={() => handleCardClick('運動習慣を付けたい')}
              />
            </div>
          </div>

          {selectedCard ? (
            <Link to='/userinfo2' className='button -primary'>
              次へ
            </Link>
          ) : (
            <button className='button -primary -disabled' disabled>
              次へ
            </button>
          )}
        </header>
      </div>
    </div>
  );
}

export default UserInfo1;
