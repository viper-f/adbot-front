import {Link} from "react-router-dom";

function ActiveForum(props) {
    return <div className="active-forum">
        <Link to={ `/forum-edit/${props.id}` }>{props.name}</Link>
    </div>
}

export default ActiveForum;