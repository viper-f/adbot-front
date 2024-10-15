import './App.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ActiveForum from "./Components/ActiveForum";
import HiddenForum from "./Components/HiddenForum";

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
                <div id="active-forums">{activeForums}</div>
                <div id="hidden-forums">{hiddenForums}</div>
            </div>;
}

export default ForumList;
