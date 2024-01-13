import './styles/Header.css';
import { Routes, Route, Link } from 'react-router-dom';

function Header(props: { name: string }) {
  return (
    <div className='Header'>
      <header className='wrapper'>
        <div className='header-wrapper'>
          <Link to='/'>＜ 戻る</Link>
          <span>{props.name}</span>
          <div>icons</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
