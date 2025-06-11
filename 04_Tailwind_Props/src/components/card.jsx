import React from 'react';

function Card({username = "Nature Related",img}) { // props are the object properties provided by REACT itself. They are the present by default.
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 ">
                <img className="w-full" src={img}alt="Nature Related Picture" />
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2 text-pink-600 ">{username}</div>
                    <p className="text-pink-300 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </>
    );
}

export default Card;