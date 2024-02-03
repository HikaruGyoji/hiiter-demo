import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import logo from './assets/img/logo.png';
import styles from './styles/Top.module.scss';

function Top() {
  return (
    <div className={styles['Top']}>
      <header className={styles['Top-header']}>
        <img src={logo} className={styles['logo-position']} alt='logo' />
        <Link to='/signup' className={`${styles.button} ${styles['-primary']}`}>
          さぁ始めよう
        </Link>
        <Link
          to='/login'
          className={`${styles.button} ${styles['-secondary']}`}
        >
          アカウントをお持ちの方
        </Link>

        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default Top;
