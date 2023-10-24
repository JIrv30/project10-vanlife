
import { initializeApp } from "firebase/app";
import {
  collection, 
  getFirestore, 
  getDocs, 
  doc, 
  getDoc,
  query,
  where
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBstpCTop_ZNns84QjdJ1aPeCRyDmi4szc",
  authDomain: "vanlife-c7c74.firebaseapp.com",
  projectId: "vanlife-c7c74",
  storageBucket: "vanlife-c7c74.appspot.com",
  messagingSenderId: "379942214051",
  appId: "1:379942214051:web:5a7c5fa619843116996216"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
   const vans = snapshot.docs.map(doc=>({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function getVan (id) {
  const docRef = doc(db, 'vans', id)
  const snapshot = await getDoc(docRef)
  return {
    ...snapshot.data(),
    id: snapshot.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'))
  const snapshot = await getDocs(q)
   const vans = snapshot.docs.map(doc=>({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}


export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}