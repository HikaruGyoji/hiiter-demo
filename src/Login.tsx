import { Routes, Route, Link } from 'react-router-dom';
import './styles/Login.css';

function Login() {
  return (
    <div className='Login'>
      <header className='Login-header'>
        <input type='email' id='email' placeholder='メールアドレス' />
        <input type='password' id='password' placeholder='パスワード' />

        <Link to='/signup' className='button -primary'>
          メールアドレスでログイン
        </Link>
        <Link to='/login' className='button -google'>
          Googleでログイン
        </Link>
        <Link to='/signup' className='button -line'>
          Lineでログイン
        </Link>
        <Link to='/login' className='button -x'>
          Xでログイン
        </Link>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default Login;
