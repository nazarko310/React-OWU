import './App.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";

export default function App() {
    return (
        <div className='container'>
            {
                <Router>
                    <div className='menu'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/users'}>Users</Link>
                    </div>
                    <Switch>
                        <Route exact path={'/'} render={() => <div>This home page</div>}/>
                        <Route path={'/users'} render={(params) => <Users {...params}/>}/>
                    </Switch>
                </Router>
            }

        </div>
    )
}