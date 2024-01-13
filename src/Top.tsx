import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import logo from './assets/img/logo.png';
import './styles/Top.css';

function Top() {
  return (
    <div className='Top'>
      <header className='Top-header'>
        <img src={logo} className='logo-position' alt='logo' />
        <Link to='/signup' className='button -secondary'>
          さぁ始めよう
        </Link>
        <Link to='/login' className='button -primary'>
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
