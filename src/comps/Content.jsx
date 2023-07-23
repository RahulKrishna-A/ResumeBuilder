import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import UserDetails from "./UserDetails.jsx";
import Educations from "./Education.jsx";

export default function Content(){
    const [UserDetailes,setUserDetails]=useState({
        FirstName:"",
        LastName:"",
        ContactNo:"",
        Email:"",
        Location:"",
        Description:"",
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
            "position": "",
            "companyName":"",
            "startDate":"",
            "endDate":"",
            "summary":""
        }
        setProfessionalExperience((prev)=>{
            return [...prev,newExperience]
        })
    }
    // ------------------------------------Education------------------
    const [Education,setEducation]=useState([{
        "id":uuidv4(),
        "SchoolName": "",
        "SchoolLocation":"",
        "startDate":"",
        "endDate":"",
        "FieldofStudy":"",
        "Description":""
    }]);

    function onAddeducation(e){
        e.preventDefault()
        let newEducation = {
            "id":uuidv4(),
            "SchoolName": "",
            "SchoolLocation":"",
            "startDate":"",
            "endDate":"",
            "FieldofStudy":"",
            "Description":""
        }

        setEducation((prev)=>{

            return [...prev,newEducation]
        })
    }

    function onChangeEducation(e){

        setEducation((prev)=>{
            // let changedForm  = prev.filter(function (forms){
            //     return forms.id = e.target.parentNode.key
            // })

            let changedForm = prev.map((values)=>{
                if(values.id==e.target.parentNode.id){
                    console.log("apped-1")
                    return {...values,[e.target.name]:e.target.value}

                }else{
                    return {...values}
                }
            })

            return [...changedForm]

    }
    )
    }

    function onDeleteEducation(e){
        console.log(e.target.parentNode)
        e.preventDefault()
        setEducation((prev)=>{


                return prev.filter((datas)=>{
                    return datas.id!=e.target.parentNode.id
                })

            }
        )
    }

    const educationList = Education.map((datas,index)=>{
        return(
            <Educations
                canDelete={index!==0}
                key={datas.id}
                id={datas.id}
                SchoolName={datas.SchoolName}
                SchoolLocation={datas.SchoolLocation}
                FieldofStudy={datas.FieldofStudy}
                startDate={datas.startDate}
                endDate={datas.endDate}
                Description={datas.Description}
                onAddeducation={onAddeducation}
                onChangeEducation={onChangeEducation}
                onDeleteEducation={onDeleteEducation}
            />
        )
    })


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
            {educationList}
            <button onClick={onAddeducation}>add</button>


        </div>


    )
}