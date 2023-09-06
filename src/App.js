import './App.css';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setUser(user);
    })
  }


  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user);
    })
    .catch(error => {
      console.log('error: ', error);
    })
  }
  return (
    <div className="App">
      {/* condition ? true : false  */}
 
      { user.uid ?
        <button onClick={handleGoogleSignOut}>SignOut</button>
        :
        <div>
          <button onClick={handleGoogleSignIn}>Google SignIn</button>
          <button onClick={handleFacebookSignIn}>Facebook SignIn</button>
          <button onClick={handleGithubSignIn}>GitHub SignIn</button>
        </div>
      }
      {user.uid && <div>
        <img src={user.photoURL} alt="" />
        <h3>User Name: {user.displayName}</h3>
        <p>Email:{user.email}</p>
      </div>}
    </div>
  );
}
export default App;
