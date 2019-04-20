import React, {Component} from 'react'
import { Navbar} from 'react-bootstrap'
import Home from './Components/Home'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (

            <div  style={{minWidth: '300px'}}>
                <Navbar bg="primary" variant="dark" expand={true}>
                    <Navbar.Brand>
                        {'Garage Door'}
                    </Navbar.Brand>
                </Navbar>
                <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                </Router>
            </div>
        )
    }
}

export default App
