// import React,{ useState,useEffect ,useContext,createContext} from "react";
// import nookies from "nookies"; 
// import firebaseClient from "./firebaseClient";
// const firebase = require('firebase');
// import "firebase/auth";
// const AuthContext = createContext({});
// const FIREBASE_CONFIG = {
//     apiKey: "AIzaSyBUquN6nFrtJIJSS50bWb03gG4rxgc5RY8",
//   authDomain: "ktern-c8b90.firebaseapp.com",
//   projectId: "ktern-c8b90",
//   storageBucket: "ktern-c8b90.appspot.com",
//   messagingSenderId: "1010160545230",
//   appId: "1:1010160545230:web:55305465e665d428150f9f",
//   measurementId: "G-RRP806CL72"
// }
// export const AuthProvider = ({ children }) => {
//     console.log("Entered auth")
//     console.log(firebase.app.length)
//     if(firebase.app.length==0)
//     firebase.initializeApp(FIREBASE_CONFIG);
  
//     const [ user, setUser ] = useState(null);
//     useEffect(() => {
//         console.log("user",user)
//         return firebase.auth().onIdTokenChanged(async (user) => {
//             if (!user) {
//                 setUser(null);
//                 nookies.set(undefined, "token", "", {});
//                 return;
//             }
//             const token = await user.getIdToken();
//             setUser(user);
//             nookies.set(undefined, "token", token, {});

//         });
//     }, []);
//     return (
//         <AuthContext.Provider value={{ user }} >
//         {children}
//     </AuthContext.Provider>);
// }
// export const useAuth = () => useContext(AuthContext);


import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/*', // required
    logoutAPIEndpoint: '/api/*', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'ktern-c8b90',
        clientEmail: 'v.nivedha20@gmail.com',
        // The private key must not be accesssible on the client side.
        privateKey:process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://ktern-c8b90.firebaseio.com',
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyBUquN6nFrtJIJSS50bWb03gG4rxgc5RY8",
  authDomain: "ktern-c8b90.firebaseapp.com",
  projectId: "ktern-c8b90",
 databaseURL: 'https://ktern-c8b90.firebaseio.com',
    },
    cookies: {
        name: 'ExampleApp',
      signed: false,// required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
    //   keys: [
    //    process.env.COOKIE_SECRET_CURRENT,
    //     process.env.COOKIE_SECRET_PREVIOUS,
    //   ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      
    },
  })
}

export default initAuth