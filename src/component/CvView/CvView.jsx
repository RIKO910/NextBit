import React from 'react';

const CvView = ({cv}) => {
    if (!cv) {
        return null; // Render nothing if cv is null
    }
    return (
        <div className="flex justify-center">
            <div className="card w-4/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="grid grid-cols-2 grid-flow-col gap-6">
                        <div>
                            <h2 className="card-title">
                                <div className="badge badge-secondary">{cv.personalInformation.name}</div>
                            </h2>
                            <p>Age: {cv.personalInformation.age}</p>
                            <p>Gender: {cv.personalInformation.gender}</p>
                            <p>Permanent Address: {cv.personalInformation.perAddress}</p>
                            <p>Temporary Address: {cv.personalInformation.tempAddress}</p>
                            <p>Marital Status: {cv.personalInformation.marriedStatus}</p>
                            <p>Occupation: {cv.personalInformation.occupation}</p>
                        </div>
                        <div>
                            <p>Educational Information</p>
                            <p>Institute Name: {cv.education.instituteName}</p>
                            <p>Degree: {cv.education.degree}</p>
                            <p>Pass Year: {cv.education.passYear}</p>
                            <p>Result: {cv.education.result}</p>
                            <br/>
                            <p>Experience Information</p>
                            <p>Company Name: {cv.experience.companyName}</p>
                            <p>Position: {cv.experience.position}</p>
                            <p>Experience in Year: {cv.experience.experienceYear}</p>
                            <p>Looking For New Role: {cv.experience.role}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CvView;