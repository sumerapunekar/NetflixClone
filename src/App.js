import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import SignIn from './Screens/SignIn'
import { useState } from 'react';

function App() {
  const [home,setHome] = useState(false)
  
  return (
    <div className='h-screen w-screen bg-[url("https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg")] bg-cover bg-opacity-5 '>
     {
      home ?   <SignIn /> :<Home p2={setHome}/>
     } 
     </div>
    
  );
}

export default App;
