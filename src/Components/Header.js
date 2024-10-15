import {Link} from "react-router-dom";

function Header() {
    return <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/forum-list">My Forums</Link></li>
        </ul>
    </header>
}

export default Header;