import {Link} from "react-router-dom";
import logo  from '../assets/logo.svg';

function Header() {
    return <header className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/forum-list">FAQ</Link></li>
        </ul>
    </header>
}

export default Header;