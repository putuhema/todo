import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxPSvPKFqi-r5lD4Yan65PlcaEgy1UuBk",
  authDomain: "todo-app-fa827.firebaseapp.com",
  projectId: "todo-app-fa827",
  storageBucket: "todo-app-fa827.appspot.com",
  messagingSenderId: "458398156202",
  appId: "1:458398156202:web:b092a1eb66cc5bc0fa17d3",
  measurementId: "G-1VS7GMRXVF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
