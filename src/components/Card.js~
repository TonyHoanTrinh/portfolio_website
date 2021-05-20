import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ photo, title, description, link, target }) => {
    return (
        <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 py-4 mb-2.5 hover:shadow-2xl">

            <Link to={{pathname: link}} target={target}>
            <div className="bg-white">
                <div>
                    <img src={photo} className="w-full" alt={title} />
                </div>

                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base"> {title} </span>
                        </li>
                        <li className="list-none">
                            <span className="text-base"> {description} </span>
                        </li>
 
                    </ul>
                </div>
            </div>
                    
            </Link>
        </div>
    );
};

export default Card;
