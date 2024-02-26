import styles from './styles/Card.module.scss';

function Card(props: {
  img: string;
  title: string;
  isSelected: boolean;
  onClick: (title: string) => void;
  width: string; // 親から渡された幅
  height: string; // 親から渡された高さ
}) {
  const divStyle = {
    backgroundColor: props.isSelected ? '#f6afaa' : 'white',
  };

  const cardStyle = {
    width: props.width,
    height: props.height,
  };

  return (
    <div
      className={styles['card-wrapper']}
      onClick={() => props.onClick(props.title)}
      style={divStyle}
    >
      <div className={styles['card-img']}>
        <img src={props.img} alt='' style={cardStyle} />
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
