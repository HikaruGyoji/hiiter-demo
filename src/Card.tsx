import React, { useState } from 'react';
import './styles/Card.css';
import muscle from './assets/img/muscle.png';

function Card() {
  // カードが選択されているかどうかを管理する状態
  const [isSelected, setIsSelected] = useState(false);

  // クリック時の処理
  const handleClick = () => {
    // クリックされたら選択状態を反転させる
    setIsSelected(!isSelected);
  };

  // カードが選択されているかどうかに応じてスタイルを設定
  const cardStyle = {
    backgroundColor: isSelected ? '#ee817b' : 'white',
  };

  return (
    <div className='card-wrapper' style={cardStyle} onClick={handleClick}>
      <img src={muscle} alt='' className='card-img' />
      <p>筋力アップ</p>
    </div>
  );
}

export default Card;
