import { Link } from "react-router-dom";

import React from 'react';
import Addjob from "./component/Addjob";
import Apply from "./component/Apply";
import Login from "./component/Login";
const Appbar = () => {
    return (
        <div>
            <Link to='/add'  >post</Link>
            <Link to='/apply' style={{marginLeft:'30px'}} >apply</Link>
        </div>
    );
};

export default Appbar