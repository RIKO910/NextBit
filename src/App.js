import Navbar from "./component/Navbar/Navbar";
import CvView from "./component/CvView/CvView";
import Form from "./component/Form/Form";
import Footer from "./component/Footer/Footer";
import {useReducer, useState} from "react";


// Education Section
const educationReducer =(state,action)=>{
    switch (action.type){
        case "instituteName":
            const tempInstituteName ={...state}
            tempInstituteName.instituteName =action.value
            return tempInstituteName;

        case "degree":
            const tempDegree ={...state}
            tempDegree.degree =action.value
            return tempDegree;

        case "passYear":
            const tempPassYear ={...state}
            tempPassYear.passYear =action.value
            return tempPassYear;

        case "result":
            const tempResult ={...state}
            tempResult.result =action.value
            return tempResult;

        default:
            return state;
    }
};

// Experience Section
const experienceReducer =(state,action)=>{
    switch (action.type){
        case "companyName":
            const tempCompanyName ={...state}
            tempCompanyName.companyName =action.value
            return tempCompanyName;

        case "position":
            const tempPosition ={...state}
            tempPosition.position =action.value
            return tempPosition;

        case "experienceYear":
            const tempExperienceYear ={...state}
            tempExperienceYear.experienceYear =action.value
            return tempExperienceYear;

        case "role":
            const tempRole ={...state}
            tempRole.role =action.value
            return tempRole;

        default:
            return state;
    }
};

// Personal Section

const personalReducer =(state,action)=>{
    switch (action.type){
        case "name":
            const tempName ={...state}
            tempName.name =action.value
            return tempName;

        case "age":
            const tempAge ={...state}
            tempAge.age =action.value
            return tempAge;

        case "perAddress":
            const tempPerAddress ={...state}
            tempPerAddress.perAddress =action.value
            return tempPerAddress;

        case "marriedStatus":
            const tempMarriedStatus ={...state}
            tempMarriedStatus.marriedStatus =action.value
            return tempMarriedStatus;

        case "gender":
            const tempGender ={...state}
            tempGender.gender =action.value
            return tempGender;

        case "tempAddress":
            const tempTempAddress ={...state}
            tempTempAddress.tempAddress =action.value
            return tempTempAddress;

        case "occupation":
            const tempOccupation ={...state}
            tempOccupation.occupation =action.value
            return tempOccupation;

        default:
            return state;
    }
};

export default function App() {

    const [education,dispatchEducation] =useReducer(educationReducer,{
        instituteName:"",
        degree:"",
        passYear:"",
        result:""
    });

    // console.log(education);

    const [experience,dispatchExperience] =useReducer(experienceReducer,{
        companyName:"",
        position:"",
        experienceYear:"",
        role:""
    });
    // console.log(experience)

    const [personalInformation,dispatchPersonal] =useReducer(personalReducer,{
        name:"",
        age:"",
        perAddress:"",
        marriedStatus:"",
        gender:"",
        tempAddress:"",
        occupation:""
    });
    // console.log(personalInformation)

    // const cv = { personalInformation, education, experience };
    // console.log(cv);

    const [cv, setCv] = useState(null);
    const handleSubmit = () => {
        const cvData = { personalInformation, education, experience };
        setCv(cvData);
        console.log(cvData);
    };

  return (
      <div>
          <Navbar></Navbar>
          <CvView cv={cv}></CvView>
          <Form
              personalInformation={personalInformation}
              dispatchPersonal={dispatchPersonal}
              education={education}
              dispatchEducation={dispatchEducation}
              experience={experience}
              dispatchExperience={dispatchExperience}
              handleSubmit ={handleSubmit}
          ></Form>
          <Footer></Footer>
      </div>
  )
}