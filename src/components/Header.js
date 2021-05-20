import React, { useState } from 'react';
import MenuItem from './MenuItem.js';
import { Link } from 'react-router-dom';

const Header = ({ ...otherProps }) => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    };

    return (
        <div>

        <header className="bg-white relative">

            <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
                
                <Link to="/portfolio_website">
                    <div className="w-full text-base uppercase hover:text-blue-600 cursor-pointer"> Home </div>
                </Link>

                <div onClick={onClick} className={`md:hidden uppercase`}>
                    Menu
                </div>

                <nav className={`${!active && 'hidden'} absolute flex flex-col bg-white top-full w-full left-0 z-20 md:static md:w-auto md:flex`}>
                    <ul className="md:flex-row md:flex">
                        <MenuItem label="Resume" to="resume" />
                        <MenuItem label="Projects" to="projects" />
                        <MenuItem label="Blog" to="blog" />
                    </ul>
                </nav>
            </div>
        </header>
        
        </div>
    );
};

export default Header;
