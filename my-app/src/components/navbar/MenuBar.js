import React from "react";
import { Link } from 'react-router-dom';
import { faHome, faPlus, faUsers, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul className="menu-bar-items">
                <li style={{ float: "left" }}>
                    <Link to="/home">
                        Anime App
                    </Link>
                </li>

                <li>
                    <Link to="/list">
                        <FontAwesomeIcon icon={faList} />
                    </Link>
                </li>

                <li>
                    <Link to="/users">
                        <FontAwesomeIcon icon={faUsers} />
                    </Link>
                </li>

                <li>
                    <Link to="/add">
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </li>

                <li>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuBar