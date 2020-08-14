import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';


const Header = ({ levels, whatLevel, score }) => {

    const level = levels.map((item) =>
        <li key={item.id}
            className={item.id === whatLevel ? "active" : ""} >
            {item.name}
        </li>
    );

    return (
        <header className="header">
            <div className="header-top">
                <div>
                    <img src={logo} alt="logotype"/>
                </div>
                <h3>
                    Счёт: {score}
                </h3>
            </div>

            <div className="header-bottom">
                <ul>
                    {level}
                </ul>
            </div>
        </header>
    );
};

export default Header;