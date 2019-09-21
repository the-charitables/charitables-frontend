import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpjwBxbwL9YKBuFoJJAJeRf-_wSC27XWw',
  authDomain: 'elevate-hack-2019.firebaseapp.com',
  databaseURL: 'https://elevate-hack-2019.firebaseio.com',
  projectId: 'elevate-hack-2019',
  storageBucket: 'elevate-hack-2019.appspot.com',
  messagingSenderId: '96133345700',
  appId: '1:96133345700:web:887144feb2054dcc0b5131'
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
