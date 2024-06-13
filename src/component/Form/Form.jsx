import React from 'react';
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import EducationalInformation from "./EducationalInformation/EducationalInformation";
import ExperienceInformation from "./ExperienceInformation/ExperienceInformation";

const Form = () => {
    return (
        <div className="flex justify-center mt-4">
            <div className="card w-4/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="grid grid-cols-2 grid-flow-col gap-6">
                        <div>
                            <PersonalInformation></PersonalInformation>
                        </div>
                        <div>
                            <EducationalInformation></EducationalInformation>
                            <br/>
                            <ExperienceInformation></ExperienceInformation>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="form-control ">
                            <label className="cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox mt-5 checkbox-accent"/>
                                <span className="label-text ml-3">We will store you information upto 2 years. Are you agree with this condition?</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;