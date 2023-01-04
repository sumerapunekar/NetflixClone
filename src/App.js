import logo from './logo.svg';
import './App.css';

import SignIn from './Screens/SignIn'
import { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';

function App() {
  const [user,setUser] = useState(false);

  return (
    <div className="App bg-black">
        {
          user ?   <HomeScreen /> : <SignIn set={setUser} />
        }
    </div>
    
    
  );
}

export default App;
