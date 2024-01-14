import { Link } from 'react-router-dom';
import './styles/UserInfo1.css';
import Header from './Header';

function UserInfo1() {
  return (
    <div className='userinfo1'>
      <Header name='ユーザー情報(4/4)' />
      <div>
        <div className='userinfo-message'>
          <p>さぁまもなく運動開始です。</p>
          <p>ニックネームと目標を記入しましょう！</p>
        </div>
        <header className='userinfo-header'>
          <div className='userinfo-wrapper'>
            <div className='userinfo-group'>
              <label htmlFor='username'>ニックネーム</label>
              <input
                className='input-box'
                id='username'
                placeholder='メールアドレス'
              />
            </div>
            <div className='userinfo-group'>
              <label htmlFor='sex'>性別</label>
              <select className='input-box' id='sex'>
                <option>男</option>
                <option>女</option>
                <option>その他</option>
              </select>
            </div>
            <div className='userinfo-group'>
              <label htmlFor='birth'>生年月日</label>
              <input className='input-box' id='birth' type='date' />
              <label htmlFor='height'>身長</label>
              <select className='input-box' id='height'>
                <option>150cm</option>
                <option>160cm</option>
                <option>170cm</option>
              </select>
            </div>
            <div className='userinfo-group'>
              <label htmlFor='weight'>体重</label>
              <select className='input-box' id='weight'>
                <option>50kg</option>
                <option>60kg</option>
                <option>70kg</option>
              </select>
            </div>
            <div className='userinfo-group'>
              <label htmlFor='work'>職業</label>
              <select className='input-box' id='work'>
                <option>会社員</option>
                <option>主婦</option>
                <option>学生</option>
                <option>その他</option>
              </select>
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
