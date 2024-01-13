import { Routes, Route, Link } from 'react-router-dom';
import './styles/Login.css';
import Header from './Header';
import Login from './Login';

function SignUp() {
  return (
    <>
      <Header name='新規登録' />
      <div className='Login'>
        <header className='Login-header'>
          <input
            className='input-box'
            type='email'
            id='email'
            placeholder='メールアドレス'
          />
          <input
            className='input-box'
            type='password'
            id='password'
            placeholder='パスワード'
          />

          <Link to='/signup' className='button -primary'>
            メールアドレスで登録
          </Link>
          <Link to='/login' className='button -google'>
            Googleでサインアップ
          </Link>
          <Link to='/signup' className='button -line'>
            Lineでサインアップ
          </Link>
          <Link to='/login' className='button -x'>
            Xでサインアップ
          </Link>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </header>
      </div>
    </>
  );
}

export default SignUp;
