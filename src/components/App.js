import React,{useState} from 'react';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';
import config from '../config.json'

function App() {
  const [name, setName] = useState('')

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />
   } else {

    return <Main name={name} />
  }

}

export default App;
