import { Link } from 'react-router-dom';
import styles from './styles/SignUp.module.scss';
import Header from './Header';

function SignUp() {
  return (
    <div className={styles['signup']}>
      <Header name='新規登録' backPath='/' icons={false} />
      <div className={styles['margin-area']}>
        <header className={styles['header']}>
          <input
            className={styles['input-box']}
            type='email'
            id='email'
            placeholder='メールアドレス'
          />
          <input
            className={styles['input-box']}
            type='password'
            id={styles['password']}
            placeholder='パスワード'
          />

          <Link
            to='/userinfo1'
            className={`${styles.button} ${styles['-primary']}`}
          >
            メールアドレスで登録
          </Link>
          <Link
            to='/userinfo1'
            className={`${styles.button} ${styles['-google']}`}
          >
            Googleでサインアップ
          </Link>
          <Link
            to='/userinfo1'
            className={`${styles.button} ${styles['-line']}`}
          >
            Lineでサインアップ
          </Link>
          <Link to='/userinfo1' className={`${styles.button} ${styles['-x']}`}>
            Xでサインアップ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default SignUp;
