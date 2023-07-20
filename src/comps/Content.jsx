import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Content(){
    const [UserDetailes,setUserDetails]=useState({
        FirstName:null,
        LasttName:null,
        ContactNo:null,
        Email:null,
        Location:null,
        Description:null,
    })

    function onUserDetails(e){
        setUserDetails((prev)=>{
            return {
                ...prev,
                [e.target.Name]:e.target.value
            }
        })
    }

    const [ProfessionalExperience,setProfessionalExperience]=useState([]);

    function onAddExperience(e){
        let newExperience = {
            "id":uuidv4(),
            "position": null,
            "companyName":null,
            "startDate":null,
            "endDate":null,
            "summary":null
        }
        setProfessionalExperience((prev)=>{
            return [...prev,newExperience]
        })
    }

    const [Education,setEducation]=useState([]);

    function oneducation(e){
        let newEducation = {
            "id":uuidv4(),
            "School Name": null,
            "School Location":null,
            "startDate":null,
            "endDate":null,
            "Field of Study":null,
            "Description":null
        }
        setEducation((prev)=>{
            return [...prev,newEducation]
        })
    }

    const [KeySkills,setKeySkills] = useState([])

    function addKeySkills(e){
        setKeySkills((prev)=>{
            return [...prev,`newvalue`]
        })


    }




    return (
        <div></div>
    )
}