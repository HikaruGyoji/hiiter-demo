import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='logo-position' alt='logo' />
        <button className='start-button'>さぁ始めよう</button>
        <button className='account-button'>アカウントをお持ちの方</button>
      </header>
    </div>
  );
}

export default App;
