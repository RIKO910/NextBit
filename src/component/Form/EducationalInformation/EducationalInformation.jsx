import React, { useState } from 'react';

const EducationalInformation = ({educationList,handleChange, handleMore}) => {

    return (
        <div>
            <h1 className="card-title">Educational Information</h1>
            <br/>
            {educationList.map((education, index) => (
                <div key={index}>
                    <p>{index}</p>
                    <input
                        onChange={(e) => handleChange(index, 'instituteName', e.target.value)}
                        value={education.instituteName}
                        type="text"
                        placeholder="Institute Name"
                        className="input input-bordered input-accent w-full max-w-xs"
                    />
                    <input
                        onChange={(e) => handleChange(index, 'degree', e.target.value)}
                        value={education.degree}
                        type="text"
                        placeholder="Degree"
                        className="input my-2 input-bordered input-accent w-full max-w-xs"
                    />
                    <input
                        onChange={(e) => handleChange(index, 'passYear', e.target.value)}
                        value={education.passYear}
                        type="text"
                        placeholder="Pass Year"
                        className="input input-bordered input-accent w-full max-w-xs"
                    />
                    <input
                        onChange={(e) => handleChange(index, 'result', e.target.value)}
                        value={education.result}
                        type="text"
                        placeholder="Result"
                        className="input my-2 input-bordered input-accent w-full max-w-xs"
                    />
                    <br />
                </div>
            ))}
            <button className="btn btn-sm btn-accent" onClick={handleMore}>Add more +</button>
        </div>
    );
};

export default EducationalInformation;
