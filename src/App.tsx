import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap'
import Home from './Components/Home'

import firebase from 'firebase'
import firebaseui from 'firebaseui'
import {IAppState, IStatusState} from "./types"
import {DOOR_STATUS} from "./types/enums"

const ui = new firebaseui.auth.AuthUI(firebase.auth())

const uiConfig = {
    callbacks: {
        // signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        //     console.log(authResult)
        //     console.log(redirectUrl)
        //     return true;
        // },
        // uiShown: function() {
        //     document.getElementById('loader').style.display = 'none';
        // }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    // signInFlow: 'popup',
    // signInSuccessUrl: 'http://localhost:3000/home',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

ui.start('#firebaseui-auth-container', uiConfig)

const initialState: IAppState = {}

type State = Readonly<typeof initialState>


class App extends Component<{}, State> {
    readonly state: State = initialState

    componentDidMount(): void {

        firebase.auth().onAuthStateChanged((rsp) => {
            if (rsp) {
                // User is signed in.
                const displayName = rsp.displayName;
                const email = rsp.email;
                const photoURL = rsp.photoURL;
                const uid = rsp.uid;
                rsp.getIdToken().then((accessToken) => {
                    this.setState({
                        user: {
                            displayName,
                            email,
                            photoURL,
                            uid,
                            accessToken,
                        }
                    })
                });
            } else {
                // User is signed out.
            }
        }, function (error) {
            console.log(error);
        });
    }

    signOut = () => {
        firebase.auth().signOut()
        this.setState({})
    }
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand={true}>
                    <Navbar.Brand>{'Garage Door'}</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {(this.state.user) ? (
                                <span onClick={this.signOut}>{this.state.user.displayName} <img src={this.state.user.photoURL}
                                                                         alt={this.state.user.displayName}
                                                                         className='border border-dark rounded-circle'
                                                                         style={{width: '40px'}}/></span>
                            ) : ''}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                {(this.state.user) ? (
                    <Home></Home>
                ) : (
                    <div id="firebaseui-auth-container"></div>
                )
                }
            </div>
        )
    }
}

export default App
