import { HashRouter, Route, Routes } from 'react-router-dom';
import Top from './Top';
import Login from './Login';
import SignUp from './SignUp';
import UserInfo1 from './UserInfo1';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/userinfo1' element={<UserInfo1 />} />
    </Routes>
  </HashRouter>
);

export default App;
