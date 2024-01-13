import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Top from './Top';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
