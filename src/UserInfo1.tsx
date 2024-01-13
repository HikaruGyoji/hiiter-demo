import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';

function UserInfo1() {
  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(1/4)' />
      <div>
        <p className='userinfo-text'>運動の目的を一つ選んでください</p>
        <span className='userinfo-span'>
          最も重視する項目を1つ選んでください
        </span>
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

          <Link to='/userinfo2' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo1;
