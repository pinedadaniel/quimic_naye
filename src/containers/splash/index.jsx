import './style.css';
import React from "react";
import Logo from '../../images/Logo.png';
import Dexter from '../../images/Dexter.png';
import {Link} from "react-router-dom";

function Splash() {
    return (
        <div className="container_splash">
            <img className="logo" src={Logo} />
            <img className="dexter" src={Dexter} />
            <Link to="/home" className="btn_start"> INICIO </Link>
        </div>
    );
}

export default Splash;
