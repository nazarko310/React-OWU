import './App.css'
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
function App() {
    return (
        <div>
            <Router>
                <nav className='menu'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/users'}>Users</Link>
                </nav>
                <Switch>
                    <Route exact path={'/'} render={() => <div>This home page</div>}/>
                    <Route exact path={'/users'} render={(props) => <Users {...props}/>}/>
                </Switch>
            </Router>

        </div>
    )
}

export default App