import './App.css';
import {Link} from "react-router-dom";

function ForumList() {
    return (
        <div>
            <div>
                <Link to="/forum-edit/1">Kings</Link>
            </div>
        </div>
    );
}

export default ForumList;
