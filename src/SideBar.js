import React from 'react';

function SideBar(selectedCourse){
    return (
        <div className="hidden sm:block w-1/2 overflow-hidden m-2 p-4 rounded-lg bg-gray-200 text-center">
            <h1 className="text-2xl font-bold w-full border-b">{selectedCourse.title}</h1>
            <p className="mt-4">{selectedCourse.description}</p>
            <div className="m-4 text-left">
            {/* if none, say none */}
            <p className="m-2 text-md"><span className="font-bold">Pre-Requisites: </span>
                {selectedCourse.prerequisites.map(preReq => (preReq +", "))}</p>
            <p className="m-2 text-md"><span className="font-bold">Credits: </span>add credits</p>
            {/* change colour of text based on difficulty */}
            <p className="m-2 text-md"><span className="font-bold">Difficulty: </span>{selectedCourse.rating}</p>
            {/* If completed, let them know they have completed course */}
            </div>
        </div>
    )
}
export default SideBar;