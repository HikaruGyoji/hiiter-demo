import React, { useState } from 'react';
import './styles/Card.css';

function Card(props: { img: string; title: string }) {
  // カードが選択されているかどうかを管理する状態
  const [isSelected, setIsSelected] = useState(false);

  // クリック時の処理
  const handleClick = () => {
    // クリックされたら選択状態を反転させる
    setIsSelected(!isSelected);
  };

  // カードが選択されているかどうかに応じてスタイルを設定
  const cardStyle = {
    backgroundColor: isSelected ? '#f6afaa' : 'white',
  };

  return (
    <div className='card-wrapper' style={cardStyle} onClick={handleClick}>
      <img src={props.img} alt='' className='card-img' />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
