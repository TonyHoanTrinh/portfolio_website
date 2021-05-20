import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, to, ...otherProps }) => {
    return (
        <div className="bg-white hover:bg-black">
            <li className="list-none md:mr-5">
                <Link className="flex w-full text-base uppercase hover:text-white cursor-pointer pt-2.5 px-2.5" to={`/${to}`}> {label} </Link>
            </li>
        </div>
    );
};

export default MenuItem;
