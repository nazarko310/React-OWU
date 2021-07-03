import './App.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";


function App() {
    return (
        <div>
            <Router>
                <nav className='menu'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/posts'}>Posts</Link>
                </nav>


                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <p>This home page</p>
                    }}/>
                    <Route path={'/users'} render={(props) => {
                        return <Users {...props}/>
                    }}/>
                    <Route path={'/posts'} render={props => {
                        return <Posts {...props}/>
                    }}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App