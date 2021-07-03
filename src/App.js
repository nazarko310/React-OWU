import './App.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (

        <Router>
            <div>
                <nav className='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/comments'>Comments</Link>
                </nav>
                <Route exact path={'/'} render={() => {
                    return <div>This is home page</div>
                }}/>
                <Route path={'/users'} render={() => {
                    return <Users/>
                }}/>
                <Route path={'/posts'} render={() => {
                    return <Posts/>
                }}/>
                <Route path={'/comments'} render={() => {
                    return <Comments/>
                }}/>
            </div>
        </Router>
    )
}

export default App