import React from 'react';

const EducationalInformation = () => {
    return (
        <div>
            <h1 className="card-title">Educational Information</h1>
            <br/>
            <input type="text" placeholder="Institute Name"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Degree"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Pass Year"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input type="text" placeholder="Result"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
        </div>
    );
};

export default EducationalInformation;