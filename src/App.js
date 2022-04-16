
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/Authentication/LogIn/LogIn';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Destination from './Components/Destination/Destination';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
