import firebase from 'firebase';
import { initializeApp } from "firebase/app";

//import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDuSSrmZxTP3tIBPJB3Ek6GQ5EkRjtPLvA",
  authDomain: "react-chat-11764.firebaseapp.com",
  projectId: "react-chat-11764",
  storageBucket: "react-chat-11764.appspot.com",
  messagingSenderId: "100939413823",
  appId: "1:100939413823:web:7b95c84a461319e9fc7b8a"
};

initializeApp(firebaseConfig);
const database = firebase.database()
//const database = getDatabase(app);
const messagesRef = database.ref('messages')

export const pushMessage = ({name, text}) =>{
    messagesRef.push({name, text})
}
