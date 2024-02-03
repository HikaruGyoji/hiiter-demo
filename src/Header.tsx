import styles from './styles/Header.module.scss';
import { Link } from 'react-router-dom';
import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.png';

function Header(props: { name: string; backPath: string; icons: boolean }) {
  return (
    <div className={styles['Header']}>
      <header className={styles['wrapper']}>
        <div className={styles['header-wrapper']}>
          <Link to={props.backPath}>＜ 戻る</Link>
          <span>{props.name}</span>
          {props.icons ? (
            <div>
              <img src={icon1} alt='icon1' className={styles['icon-margin']} />
              <img src={icon2} alt='icon2' />
            </div>
          ) : (
            <div>　　　</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
