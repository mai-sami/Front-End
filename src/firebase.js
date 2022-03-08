// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 4, 6);
//     }
//   }
// }

 
import firebase from "firebase/compat/app";
 import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxPzjYqDEJsjtoAv5y2rx4S5ee-SWH15E",
  authDomain: "testing-110c9.firebaseapp.com",
  projectId: "testing-110c9",
  storageBucket: "testing-110c9.appspot.com",
  messagingSenderId: "904123033675",
  appId: "1:904123033675:web:f4fea94de065c3a30c05ce",
  measurementId: "G-N62PD0QQ3X"
  });
  const db = firebaseApp.firestore()
  export default db




//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBv2GQLShTcxnpX8f47BBkgRdoQ6K3AWnk",
//   authDomain: "test-af16d.firebaseapp.com",
//   projectId: "test-af16d",
//   storageBucket: "test-af16d.appspot.com",
//   messagingSenderId: "378234825824",
//   appId: "1:378234825824:web:6190669143a1a895406705",
//   measurementId: "G-STQQ0STMF1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);