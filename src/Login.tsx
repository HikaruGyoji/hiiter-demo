import { Link } from 'react-router-dom';
import styles from './styles/Login.module.scss';
import Header from './Header';
import google from './assets/img/google.png';
import line from './assets/img/line.png';
import x from './assets/img/x.png';

function Login() {
  return (
    <div className={styles['Login']}>
      <Header name='ログイン' backPath='/' icons={false} />
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
            to='/signup'
            className={`${styles.button} ${styles['-primary']}`}
          >
            メールアドレスでログイン
          </Link>
          <Link to='/login' className={`${styles.button} ${styles['-google']}`}>
            <img src={google} alt='google' />
            Googleでログイン
          </Link>
          <Link to='/signup' className={`${styles.button} ${styles['-line']}`}>
            <img src={line} alt='line' />
            Lineでログイン
          </Link>
          <Link to='/login' className={`${styles.button} ${styles['-x']}`}>
            <img src={x} alt='x' />
            Xでログイン
          </Link>
        </header>
      </div>
    </div>
  );
}

export default Login;
