import React, { useEffect, useState} from 'react';

function Course(info){
    const [isChecked, toggleChecked] = useState(info.completed);

    useEffect(()=>{
        info.toggleCompleted(info.title, isChecked);
    }, [isChecked, info]);

    function handleClicked(){
        if(info.enabled){
            toggleChecked(!isChecked)
        }
    }

    return(
        <div className={`${info.enabled ? '' : 'opacity-50'} flex-col m-2 bg-gray-200 rounded-lg`}>
            <div className="flex flex-row items-center">
                <svg className={`${isChecked ? 'stroke-current text-green-700' : 'stroke-current text-red-700'} h-8 ml-4`} 
                    onClick={()=> handleClicked()}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="w-full p-4" onClick={() => info.focusedCourse(info)}>
                    {/*Course Title */}
                    <h1 className="m-2" onClick={() => info.focusedCourse(info)}>{info.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Course;