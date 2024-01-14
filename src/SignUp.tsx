import { Link } from 'react-router-dom';
import './styles/SignUp.css';
import Header from './Header';

function SignUp() {
  return (
    <div className='signup'>
      <Header name='新規登録' />
      <div className='margin-area'>
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

          <Link to='/userinfo1' className='button -primary'>
            メールアドレスで登録
          </Link>
          <Link to='/userinfo1' className='button -google'>
            Googleでサインアップ
          </Link>
          <Link to='/userinfo1' className='button -line'>
            Lineでサインアップ
          </Link>
          <Link to='/userinfo1' className='button -x'>
            Xでサインアップ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default SignUp;
