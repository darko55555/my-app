import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyASzQbwCMeKVB1ivtLrLUC2lC4LVzy5BkM",
    authDomain: "my-todo-app-a4bf2.firebaseapp.com",
    databaseURL: "https://my-todo-app-a4bf2.firebaseio.com",
    projectId: "my-todo-app-a4bf2",
    storageBucket: "my-todo-app-a4bf2.appspot.com",
    messagingSenderId: "696490217141",
    appId: "1:696490217141:web:5d87b9dc452a316f6eb8fc",
    measurementId: "G-BJPMK0652R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export{auth, provider}
export default db