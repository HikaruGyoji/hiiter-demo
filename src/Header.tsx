import styles from './styles/Header.module.scss';
import { Link } from 'react-router-dom';

function Header(props: { name: string; backPath: string }) {
  return (
    <div className={styles['Header']}>
      <header className={styles['wrapper']}>
        <div className={styles['header-wrapper']}>
          <Link to={props.backPath}>＜ 戻る</Link>
          <span>{props.name}</span>
          <div>icons</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
