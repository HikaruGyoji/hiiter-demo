import styles from './styles/Header.module.scss';
import { Link } from 'react-router-dom';

function Header(props: { name: string; backPath: string; icons: boolean }) {
  return (
    <div className={styles['Header']}>
      <header className={styles['wrapper']}>
        <div className={styles['header-wrapper']}>
          <Link to={props.backPath}>＜ 戻る</Link>
          <span>{props.name}</span>
          {props.icons ? <div>icons</div> : <div>　　　</div>}
        </div>
      </header>
    </div>
  );
}

export default Header;
