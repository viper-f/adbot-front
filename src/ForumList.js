import './App.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

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

    const arr = [];
    for (const forum of forums) {
        arr.push(
            <div>
                <div>
                    <Link to={ `/forum-edit/${forum['id']}` }>{forum['name']}</Link>
                </div>
            </div>
        );
    }

    return arr;
}

export default ForumList;
