import { Link } from 'react-router-dom';
import './styles/Login.css';
import Header from './Header';

function Login() {
  return (
    <div className='Login'>
      <Header name='ログイン' />
      <div>
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
        </header>
      </div>
    </div>
  );
}

export default Login;
