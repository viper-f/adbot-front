import './App.css';
import {useParams} from "react-router-dom";

function ForumEdit() {
    const params = useParams()
    return (
        <div>
            <form id="forum-edit">
                <input type="hidden" name="forum_id" value={params.id} />
                <label>Name <input type="text" name="name" /></label>
                <lable>Current Ad Topic <input type="text" name="ad_topic_url" /></lable>
                <input type="submit" />
            </form>
        </div>
    );
}

export default ForumEdit;