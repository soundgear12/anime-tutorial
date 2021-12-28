import React from "react";
import { Link } from 'react-router-dom'

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul className="menu-bar-items">
                <li style={{ float: "left" }}>
                    <Link to="/test">
                        Test
                    </Link>
                </li>

                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuBar