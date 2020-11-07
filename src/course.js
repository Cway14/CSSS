import React from 'react';

function course(info){
    return(
        <div className="m-2 p-4 bg-gray-200 rounded-lg" >
            {/*Course Title */}
            <h1>{info.title}</h1>
        </div>
    )
}

export default course;