import logo from './logo.svg';
import './App.css';
import Addjob from './component/Addjob';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Apply from './component/Apply';
import Appbar from './Appbar';
import { useState } from 'react';
function App() {
  const [form,setForm]=useState(null);

  return (
    <div className="App">
      <h1 style={{color:"green"}}> List & Find your job here</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWjs1Hzqc8zR-kHrCqBOgkKHOC2LuPFJl9Q&usqp=CAU'></img>
      <h3>Login now to get a awesome experience</h3>
      <button onClick={()=>{
        setForm(<Login />)}}>Login</button>
     <div>{form}</div>
     <div>{<Appbar/>}</div>
      <Routes>
        <Route path='/add' element={<Addjob/>}></Route>
        <Route path='/apply' element={<Apply/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
