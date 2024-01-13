import { HashRouter, Route, Routes } from 'react-router-dom';
import Top from './Top';
import Login from './Login';
import SignUp from './SignUp';
import UserInfo1 from './UserInfo1';
import UserInfo2 from './UserInfo2';
import UserInfo3 from './UserInfo3';
import UserInfo4 from './UserInfo4';

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
    </Routes>
  </HashRouter>
);

export default App;
