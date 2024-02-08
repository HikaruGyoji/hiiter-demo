import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/Complete.module.scss';

function Complete() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='完了' backPath='/home' icons={true} />
      <div className={styles['userinfo-header']}>
        <div className={styles['container']}>
          <p>
            トレーニング終了です。
            <br />
            お疲れ様でした。
          </p>
        </div>
        <Link
          to='/progress'
          className={`${styles.button} ${styles['-secondary']}`}
        >
          進捗確認
        </Link>
        <Link to='/home' className={`${styles.button} ${styles['-primary']}`}>
          完了
        </Link>
      </div>
    </div>
  );
}

export default Complete;
