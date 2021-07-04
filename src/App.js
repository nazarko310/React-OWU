import './App.css'
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Albums from "./components/albums/Albums";
function App() {
    return (
        <div>
            <Router>
                <nav className='menu'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/albums'}>Albums</Link>
                </nav>
                <Switch>
                    <Route exact path={'/'} render={() => <div>This home page</div>}/>
                    <Route path={'/users'} render={(props) => <Users {...props}/>}/>
                    <Route path={'/albums'} render={(props) => <Albums {...props}/>}/>
                </Switch>
            </Router>

        </div>
    )
}

export default App