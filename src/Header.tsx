import styles from './styles/Header.module.scss';
import { Link } from 'react-router-dom';

function Header(props: { name: string }) {
  return (
    <div className={styles['Header']}>
      <header className={styles['wrapper']}>
        <div className={styles['header-wrapper']}>
          <Link to='/'>＜ 戻る</Link>
          <span>{props.name}</span>
          <div>icons</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
