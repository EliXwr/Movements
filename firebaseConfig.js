import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_msV6Gro43XnBXqBkUWOBgTWvgip7rQs",
  authDomain: "database-elixwr.firebaseapp.com",
  databaseURL: "https://database-elixwr-default-rtdb.firebaseio.com",
  projectId: "database-elixwr",
  storageBucket: "database-elixwr.appspot.com",
  messagingSenderId: "38862712407",
  appId: "1:38862712407:android:5135704a380adf35223d12"
};

// Inicializar Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Si ya está inicializado, utiliza esa instancia
}

export default firebase;
