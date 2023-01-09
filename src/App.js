import logo from './logo.svg';
import './App.css';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import SignIn from './Screens/SignIn'
import { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import app from './Firebase'
import { async } from '@firebase/util';


function App() {
  const auth = getAuth(app)



  const schema = {email : "", pass : ""};
  const [cred,setCred] = useState(schema);
  const [user,setUser] = useState(null);

  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, cred.email,cred.pass)
  .then(userCredential => {
     const u = userCredential.user;
    setUser(u)
  })
  .catch(error => {
    setUser(null)
  });
  }


  const loginUser = async () => {
    await signInWithEmailAndPassword(auth, cred.email,cred.pass)
  .then(userCredential => {
     const u = userCredential.user;
    setUser(u)
  })
  .catch(error => {
    setUser(null)
  });
  }

  return (
    <div className="App bg-black">
        <Routes>
          <Route path="/" element={user ? <HomeScreen/> : <SignIn handle={{createUser,loginUser}} Cred={cred} SCred={setCred}/>}/>
          <Route path="/login" element={<SignIn Cred={setCred}/>}/>
        </Routes>
    </div>
    
    
  );
}

export default App;
