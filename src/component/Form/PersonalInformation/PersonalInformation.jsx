import React from 'react';

const PersonalInformation = ({ personalInformation,dispatchPersonal}) => {

    return (
        <div>
            <h1 className="card-title">Personla Information</h1>
            <br/>
            <input onChange={(e)=>dispatchPersonal({type:"name",value:e.target.value})} value={personalInformation.name} type="text" placeholder="Name"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchPersonal({type:"age",value:e.target.value})} value={personalInformation.age} type="number" placeholder="Age"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchPersonal({type:"perAddress",value:e.target.value})} value={personalInformation.perAddress} type="text" placeholder="Permanent Address"
                   className="input input-bordered input-accent w-full max-w-xs"/>
            <select onChange={(e)=>dispatchPersonal({type:"marriedStatus",value:e.target.value})} value={personalInformation.marriedStatus} className="select my-2 select-accent select-bordered w-full max-w-xs">
                <option disabled value="" selected>Married Status</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
            </select>
            <select onChange={(e)=>dispatchPersonal({type:"gender",value:e.target.value})} value={personalInformation.gender} className="select select-accent select-bordered w-full max-w-xs">
                <option disabled value="" selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input onChange={(e)=>dispatchPersonal({type:"tempAddress",value:e.target.value})} value={personalInformation.tempAddress} type="text" placeholder="Temporary Address"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
            <input onChange={(e)=>dispatchPersonal({type:"occupation",value:e.target.value})} value={personalInformation.occupation} type="text" placeholder="Occupation"
                   className="input my-2 input-bordered input-accent w-full max-w-xs"/>
        </div>
    );
};

export default PersonalInformation;