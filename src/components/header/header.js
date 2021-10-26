import React  from 'react';
import Logo from "../../img/logo.png";
import './header.scss'
import Vector from  "../../img/Vector(3).png"

const Header = ({setValue}) => {
    return (
        <header className="header">
            <div className="logo_container">
                <div className="logo_header">
                    <img className="logo" alt="logo" src={Logo}/>
                </div>
                <h1 className="logo_title">STATISTIC</h1>
            </div>
            <div className="search_box">
                <input
                    className="search_inp"
                    type="search"
                    placeholder="Search..."
                    onChange={(event ) => setValue(event.target.value)}
                />
                <img
                    className="search_img"
                    src={Vector}
                    alt="search"/>
            </div>
        </header>
    );
};

export default Header;
