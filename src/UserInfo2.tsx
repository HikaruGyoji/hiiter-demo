import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';
import easy from './assets/img/easy.png';
import normal from './assets/img/normal.png';
import difficult from './assets/img/difficult.png';
import React, { useState } from 'react';

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
    <div className='userinfo1'>
      <Header name='ユーザー情報(2/4)' />
      <div className='margin-area'>
        <p className='userinfo-text'>運動レベルを選んでください</p>
        <br />
        <header className='userinfo-header'>
          <div className='userinfo1-wrapper'>
            <div className='card-boxes'>
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
            <div className='card-boxes'>
              <Card
                img={difficult}
                title={'上級'}
                isSelected={selectedCard === '上級'}
                onClick={handleCardClick}
              />
            </div>
          </div>

          <Link to='/userinfo3' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo2;
