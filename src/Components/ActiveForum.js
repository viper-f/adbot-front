import {Link} from "react-router-dom";

function ActiveForum(props) {
    return <div className="active-forum">
        <h3>{props.name}</h3>
        <div>{props.domain}</div>
        <Link to={ `/forum-edit/${props.id}` }>Edit</Link>
        <Link to={ `/forum-advertise/${props.id}` }>Advertise</Link>
        <Link to={ `/forum-partner/${props.id}` }>Partner</Link>
        <Link to={ `/forum-history/${props.id}` }>History</Link>

    </div>
}

export default ActiveForum;