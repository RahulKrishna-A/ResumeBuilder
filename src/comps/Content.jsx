import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import UserDetails from "./UserDetails.jsx";

export default function Content(){
    const [UserDetailes,setUserDetails]=useState({
        FirstName:0,
        LastName:0,
        ContactNo:0,
        Email:0,
        Location:0,
        Description:0,
    })

    function onChangeUserDetails(e){
        setUserDetails((prev)=>{
            console.log(prev)
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const [ProfessionalExperience,setProfessionalExperience]=useState([]);

    function onAddExperience(e){
        let newExperience = {
            "id":uuidv4(),
            "position": 0,
            "companyName":0,
            "startDate":0,
            "endDate":0,
            "summary":0
        }
        setProfessionalExperience((prev)=>{
            return [...prev,newExperience]
        })
    }

    const [Education,setEducation]=useState([]);

    function onAddeducation(e){
        let newEducation = {
            "id":uuidv4(),
            "School Name": 0,
            "School Location":0,
            "startDate":0,
            "endDate":0,
            "Field of Study":0,
            "Description":0
        }
        setEducation((prev)=>{
            return [...prev,newEducation]
        })
    }



    const [KeySkills,setKeySkills] = useState([])

    function addKeySkills(e){

        setKeySkills((prev)=>{
            console.log(prev)
            return [...prev,`newvalue`]
        })


    }




    return (
        <div>
            <UserDetails
                FirstName={UserDetailes.FirstName}
                LastName={UserDetailes.LastName}
                Contact={UserDetailes.ContactNo}
                Email={UserDetailes.Email}
                Location={UserDetailes.Location}
                Desc={UserDetailes.Description}
                onchangeFn = {onChangeUserDetails}
            />
        </div>
    )
}