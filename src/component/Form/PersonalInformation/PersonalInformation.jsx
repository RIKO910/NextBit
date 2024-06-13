import React from 'react';

const PersonalInformation = () => {
    return (
        <div>
            <h1 className="card-title">Personla Information</h1>
            <br/>
            <input type="text" placeholder="Name"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Age"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Permanent Address"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Married"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Gender"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Temporary Address"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Occupation"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
        </div>
    );
};

export default PersonalInformation;