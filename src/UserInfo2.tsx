import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';
import Card from './Card';
import easy from './assets/img/easy.png';
import normal from './assets/img/normal.png';
import difficult from './assets/img/difficult.png';

function UserInfo2() {
  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(2/4)' />
      <div>
        <p className='userinfo-text'>運動レベルを選んでください</p>
        <br />
        <header className='userinfo-header'>
          <div className='userinfo1-wrapper'>
            <div className='card-boxes'>
              <Card img={easy} title={'初級'} />
              <Card img={normal} title={'中級'} />
            </div>
            <div className='card-boxes'>
              <Card img={difficult} title={'上級'} />
            </div>
          </div>

          <Link to='/userinfo3' className='button -primary'>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default UserInfo2;
