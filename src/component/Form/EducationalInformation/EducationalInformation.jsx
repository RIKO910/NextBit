import React from 'react';


const EducationalInformation = ({education,dispatchEducation}) => {

    return (
        <div>
            <h1 className="card-title">Educational Information</h1>
            <br/>
            <input onChange={(e)=>dispatchEducation({type:"instituteName",value:e.target.value})} value={education.instituteName} type="text" placeholder="Institute Name"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchEducation({type:"degree",value:e.target.value})} value={education.degree} type="text" placeholder="Degree"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchEducation({type:"passYear",value:e.target.value})} value={education.passYear} type="text" placeholder="Pass Year"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchEducation({type:"result",value:e.target.value})} value={education.result} type="text" placeholder="Result"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
        </div>
    );
};

export default EducationalInformation;