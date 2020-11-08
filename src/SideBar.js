import React from 'react';

function SideBar(selectedCourse){
    return (
        <div className="hidden sm:block w-1/2 overflow-hidden m-2 mt-20 p-4 rounded-lg bg-gray-200 text-center fixed right-0">
            <h1 className="text-2xl font-bold w-full border-b">{selectedCourse.title}</h1>
            <p className="mt-4">{selectedCourse.description}</p>
            <div className="m-4 text-left">
            {/* if none, say none */}
            <p className="m-2 text-md"><span className="font-bold">Pre-Requisites: </span>
                {selectedCourse.prerequisites.map(preReq => (preReq +", "))}</p>
            <p className="m-2 text-md"><span className="font-bold">Credits: </span>{selectedCourse.credits}</p>
            {/* change colour of text based on difficulty */}
            <p className="m-2 text-md"><span className="font-bold">Difficulty: </span>{selectedCourse.rating}</p>
            {/* If completed, let them know they have completed course */}
            </div>
            <div className="flex-col border-t-2 text-left items-center m-2">
                <h3 className="m-3 text-xl"><span className="font-bold">Credits Taken:</span> {selectedCourse.credits}</h3>
                <h3 className="m-3 text-xl"><span className="font-bold">Credits Remaining:</span> {120 - selectedCourse.credits}</h3>
            </div>
        </div>
    )
}
export default SideBar;