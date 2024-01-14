import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';
import muscle from './assets/img/muscle.png';
import health from './assets/img/health.png';
import diet from './assets/img/diet.png';
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
    <div className='userinfo1'>
      <Header name='ユーザー情報(3/4)' />
      <div className='margin-area'>
        <p className='userinfo-text'>運動の悩みを選んでください</p>
        <span className='userinfo-span'>複数選択可</span>
        <header className='userinfo-header'>
          <div className='userinfo1-wrapper'>
            <div className='card-boxes'>
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
            <div className='card-boxes'>
              <Card
                img={health}
                title={'健康増進'}
                isSelected={selectedCards.includes('健康増進')}
                onClick={handleCardClick}
              />
              <Card
                img={muscle}
                title={'筋力アップ'}
                isSelected={selectedCards.includes('筋力アップ')}
                onClick={handleCardClick}
              />
            </div>
            <div className='card-boxes'>
              <Card
                img={muscle}
                title={'筋力アップ'}
                isSelected={selectedCards.includes('筋力アップ')}
                onClick={handleCardClick}
              />
              <Card
                img={muscle}
                title={'筋力アップ'}
                isSelected={selectedCards.includes('筋力アップ')}
                onClick={handleCardClick}
              />
            </div>
          </div>

          <Link to='/userinfo4' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo3;
