import './App.css';
import {useEffect, useState} from "react";
import ActiveForum from "./Components/ActiveForum";
import HiddenForum from "./Components/HiddenForum";
import {Link} from "react-router-dom";

function ForumList() {
    const [forums, setForums] = useState([]);
    useEffect(() => {
        fetch("https://3g9q50uecg.execute-api.us-east-1.amazonaws.com/home-forum-list", {
            method: "GET",
            // headers: {
            //     "X-RapidAPI-Key": "your-api-key",
            // },
        })
            .then((response) => response.json())
            .then((data) => {
                setForums(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const activeForums = [];
    const hiddenForums = [];
    for (const forum of forums) {
        if (forum['hidden']) {
            hiddenForums.push(<HiddenForum id={forum['id']} name={forum['name']} />)
        } else {
            activeForums.push(<ActiveForum
                id={forum['id']}
                name={forum['name']}
                domain={forum['domain']}
            />)
        }
    }

    return <div>
                <div id="active-forums" className="block">{activeForums}</div>
                <Link to="/forum-add" className="block">Add Forum</Link>
                <div id="hidden-forums" className="block">{hiddenForums}</div>
            </div>;
}

export default ForumList;
