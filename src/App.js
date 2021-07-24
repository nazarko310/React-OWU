import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <div>
            <Router>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <div>This is home page</div>
                    }}/>
                    <Route path={'/users'} render={(props) => <Users {...props}/>
                    }/>
                    <Route path={'/posts'} render={(props) => <Posts {...props}/>
                    }/>
                </Switch>
            </Router>

        </div>
    )
}