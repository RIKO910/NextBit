import React from 'react';

const ExperienceInformation = ({experience, dispatchExperience}) => {

    return (
        <div>
            <h1 className="card-title">Experience Information</h1>
            <br/>
            <input onChange={(e)=>dispatchExperience({type:"companyName",value:e.target.value})} value={experience.companyName} type="text" placeholder="Company Name"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchExperience({type:"position",value:e.target.value})} value={experience.position} type="text" placeholder="Position"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchExperience({type:"experienceYear",value:e.target.value})} value={experience.experienceYear} type="text" placeholder="Experience in year"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <select onChange={(e)=>dispatchExperience({type:"role",value:e.target.value})} value={experience.role} className="select my-2 select-accent select-bordered w-full max-w-xs">
                <option disabled value="" selected>Looking for new role ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
    );
};

export default ExperienceInformation;