import React, { Component } from 'react'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";



firebase.initializeApp({
    apiKey: "AIzaSyAT7t8MbKfZy4vjOH_9ommLxSSysNB267s",
    authDomain: "authlogin-2c3f9.firebaseapp.com"
})



class Login extends Component {
    state = { isSignedIn: false }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {


        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }
    render() {
        return (
            <div className="Login">
                {this.state.isSignedIn ? (
                    <span>
                        <div> Signed In !!!</div>
                        <button onClick={() => firebase.auth().signOut()}>Signed Out </button>
                     
                        <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )
                }


            </div>
        )
    }
}
export default Login