import React, { useState} from 'react';

function Course(info){
    const [isChecked, toggleChecked] = useState(false);
    console.log(info);
    return(
        <div className="flex-col m-2 p-4 bg-gray-200 rounded-lg" onClick={() => info.focusedCourse(info)}>
            <div className="flex flex-row items-center">
                <svg className={`${isChecked ? 'stroke-current text-red-700' : 'stroke-current text-green-700'} h-8`} 
                    onClick={()=> toggleChecked(!isChecked)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {/*Course Title */}
                <h1 className="m-2">{info.title}</h1>
            </div>
        </div>
    )
}

export default Course;