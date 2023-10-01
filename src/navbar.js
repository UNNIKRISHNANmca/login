import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
function Navbar() {
    return(
        <div>
        <nav>
          <ul>
            
            <li>
              <Link to="/login">Logout</Link>
              
            </li>
          </ul>
        </nav>
        </div>
    )
}
export default Navbar;