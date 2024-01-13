import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';

function UserInfo1() {
  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(4/4)' />
      <div>
        <p className='userinfo-text'>さぁまもなく運動開始です。</p>
        <p className='userinfo-text'>ニックネームと目標を記入しましょう！</p>
        <header className='userinfo-header'>
          <Link to='/signup' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo1;
