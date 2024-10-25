import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBou0RkHvzQqoS1sL2AKmn7FMj8OT_SxgA',
  authDomain: 'tarefasplus-e4b7e.firebaseapp.com',
  projectId: 'tarefasplus-e4b7e',
  storageBucket: 'tarefasplus-e4b7e.appspot.com',
  messagingSenderId: '984428704967',
  appId: '1:984428704967:web:685ec3db87eef83c75fae2',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export { db }
