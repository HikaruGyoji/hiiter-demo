import { HashRouter, Route, Routes } from 'react-router-dom';
import Top from './Top';
import Login from './Login';
import SignUp from './SignUp';
import UserInfo1 from './UserInfo1';
import UserInfo2 from './UserInfo2';
import UserInfo3 from './UserInfo3';
import UserInfo4 from './UserInfo4';
import ExplainHiit from './ExplainHiit';
import Home from './Home';
import Information from './Information';
import WarmingUp from './WarmingUp';
import Break from './Break';
import CoolDown from './CoolDown';
import Exercise from './Exercise';
import Complete from './Complete';
import Progress from './Progress';
import LevelSetting from './LevelSetting';
import Guidline from './Guidline';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/userinfo1' element={<UserInfo1 />} />
      <Route path='/userinfo2' element={<UserInfo2 />} />
      <Route path='/userinfo3' element={<UserInfo3 />} />
      <Route path='/userinfo4' element={<UserInfo4 />} />
      <Route path='/explainhiit' element={<ExplainHiit />} />
      <Route path='/home' element={<Home />} />
      <Route path='/information' element={<Information />} />
      <Route path='/warmingup' element={<WarmingUp />} />
      <Route path='/exercise' element={<Exercise />} />
      <Route path='/break' element={<Break />} />
      <Route path='/cooldown' element={<CoolDown />} />
      <Route path='/complete' element={<Complete />} />
      <Route path='/progress' element={<Progress />} />
      <Route path='/levelsetting' element={<LevelSetting />} />
      <Route path='/guildline' element={<Guidline />} />
    </Routes>
  </HashRouter>
);

export default App;
