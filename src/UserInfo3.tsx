import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';

function UserInfo3() {
  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(3/4)' />
      <div>
        <p className='userinfo-text'>運動の悩みを選んでください</p>
        <span className='userinfo-span'>複数選択可</span>
        <header className='userinfo-header'>
          <div className='userinfo1-wrapper'>
            <div className='card-boxes'>
              <Card />
              <Card />
            </div>
            <div className='card-boxes'>
              <Card />
              <Card />
            </div>
            <div className='card-boxes'>
              <Card />
              <Card />
            </div>
          </div>

          <Link to='/userinfo4' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo3;
