import styles from './styles/Card.module.css';

function Card(props: {
  img: string;
  title: string;
  isSelected: boolean;
  onClick: (title: string) => void;
}) {
  const cardStyle = {
    backgroundColor: props.isSelected ? '#f6afaa' : 'white',
  };

  return (
    <div
      className={styles['card-wrapper']}
      style={cardStyle}
      onClick={() => props.onClick(props.title)}
    >
      <img src={props.img} alt='' className={styles['card-img']} />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
