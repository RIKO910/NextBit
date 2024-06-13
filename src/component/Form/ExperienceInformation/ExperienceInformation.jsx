import React from 'react';

const ExperienceInformation = () => {
    return (
        <div>
            <h1 className="card-title">Experience Information</h1>
            <br/>
            <input type="text" placeholder="Company Name"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Position"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Experience in year"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Looking for new role ?"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
        </div>
    );
};

export default ExperienceInformation;