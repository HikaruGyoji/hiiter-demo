import { Routes, Route, Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';

function UserInfo1() {
  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(1/4)' />
      <div>
        <header className='Login-header'>
          <div>
            <div>
              <Card />
              <Card />
            </div>
            <div>
              <Card />
              <Card />
            </div>
            <div>
              <Card />
              <Card />
            </div>
          </div>

          <Link to='/signup' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo1;
