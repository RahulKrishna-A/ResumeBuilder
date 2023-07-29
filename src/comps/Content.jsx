import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useRef} from "react";
import {useReactToPrint} from "react-to-print";

import UserDetails from "./User_container jsx/UserDetails.jsx";
import Educations from "./User_container jsx/Education.jsx";
import Experiences from "./User_container jsx/Experience.jsx";
import KeySkill from "./User_container jsx/KeySkills.jsx";
// -------------preview

import PreviewUserDetails from "./Preview_container jsx/Preview_userdetails.jsx";
import PreviewEducation from "./Preview_container jsx/Preview_ education.jsx";
import PreviewProfessionalExperience from "./Preview_container jsx/Preview_professionalExperience.jsx";
import PreviewKeySkills from "./Preview_container jsx/Preview_skills.jsx";
import ReactToPrint from "react-to-print";

import "./styles/Content.css"


// --images import
import profilePic from "../assets/user-profile.png"
import EducationPic from "../assets/education.png"
import ExperiencePic from "../assets/bag.png"
import SkillsPic from "../assets/Skills.png"
// =======================================

export default function Content() {


    const [UserDetailes, setUserDetails] = useState({
        FirstName: "",
        LastName: "",
        ContactNo: "",
        Email: "",
        Location: "",
        Description: "",
    })

    function onChangeUserDetails(e) {
        setUserDetails((prev) => {
            console.log(prev)
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    // ------------------------------------Education------------------
    const [Education, setEducation] = useState([{
        "id": uuidv4(),
        "SchoolName": "",
        "SchoolLocation": "",
        "startDate": "",
        "endDate": "",
        "FieldofStudy": "",
        "Description": ""
    }]);

    function onAddeducation(e) {
        e.preventDefault()
        let newEducation = {
            "id": uuidv4(),
            "SchoolName": "",
            "SchoolLocation": "",
            "startDate": "",
            "endDate": "",
            "FieldofStudy": "",
            "Description": ""
        }

        setEducation((prev) => {

            return [...prev, newEducation]
        })
    }

    function onChangeEducation(e) {


        setEducation((prev) => {

                let changedForm = prev.map((values) => {
                    if (values.id == e.target.parentNode.parentNode.id) {

                        return {...values, [e.target.name]: e.target.value}

                    } else {
                        return {...values}
                    }
                })

                return [...changedForm]

            }
        )
    }

    function onDeleteEducation(e) {

        e.preventDefault()
        setEducation((prev) => {


                return prev.filter((datas) => {
                    return datas.id != e.target.parentNode.id
                })

            }
        )
    }

    const educationList = Education.map((datas, index) => {
        return (
            <Educations
                canDelete={index !== 0}
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


    // ------------------------------------ Experience ------------
    const [ProfessionalExperience, setProfessionalExperience] = useState([
        {
            "id": uuidv4(),
            "position": "",
            "companyName": "",
            "startDate": "",
            "endDate": "",
            "summary": ""
        }
    ]);

    function onAddExperience(e) {
        let newExperience = {
            "id": uuidv4(),
            "position": "",
            "companyName": "",
            "startDate": "",
            "endDate": "",
            "summary": ""
        }
        setProfessionalExperience((prev) => {
            return [...prev, newExperience]
        })
    }

    function onChangeExperience(e) {
        console.log(e.target.parentNode.parentNode)
        console.log(ProfessionalExperience)
        setProfessionalExperience((prev) => {

                let changedForm = prev.map((values) => {
                    if (values.id == e.target.parentNode.parentNode.id) {
                        console.log("yes")

                        return {...values, [e.target.name]: e.target.value}

                    } else {
                        return {...values}
                    }
                })

                return [...changedForm]

            }
        )

    }

    function onDeleteExperience(e) {

        e.preventDefault()
        setProfessionalExperience((prev) => {


                return prev.filter((datas) => {
                    return datas.id != e.target.parentNode.id
                })

            }
        )
    }


    const experienceList = ProfessionalExperience.map((datas, index) => {
        return (
            <Experiences
                canDelete={index !== 0}
                key={datas.id}
                id={datas.id}
                position={datas.position}
                companyName={datas.companyName}
                startDate={datas.startDate}
                endDate={datas.endDate}
                summary={datas.summary}
                onAddExperience={onAddExperience}
                onChangeExperience={onChangeExperience}
                onDeleteExperience={onDeleteExperience}
            />
        )
    })
    // -------------------SKILLS===============================--------------===
    const [KeySkills, setKeySkills] = useState([])

    function addKeySkills(e) {
        if (e.target.parentNode.childNodes[0].value) {
            setKeySkills((prev) => {
                // console.log(e.target.parentNode.childNodes[0].value)
                return [...prev, {
                    "id": uuidv4(),
                    "Skill": e.target.parentNode.childNodes[0].value
                }]
            })


        }
    }

    function deletekeySkills(e) {
        setKeySkills((prev) => {
            return prev.filter((prev) => {
                return prev.id != e.target.id
            })
        })
    }

    const KeySkillsList = KeySkills.map((datas) => {
            return <KeySkill id={datas.id} key={datas.id} skill={datas.Skill} deletekeySkills={deletekeySkills}/>
        }
    )


    // --------------------------------Preview container methods
    const PreviewEducationList = Education.map((datas) => {

        return <PreviewEducation
            key={datas.id}
            SchoolName={datas.SchoolName}
            SchoolLocation={datas.SchoolLocation}
            FieldofStudy={datas.FieldofStudy}
            startDate={datas.startDate}
            endDate={datas.endDate}
            Description={datas.Description}

        />
    })
    const PreviewProfessionalExperienceList = ProfessionalExperience.map((datas) => {

        return (<PreviewProfessionalExperience

            key={datas.id}

            position={datas.position}
            companyName={datas.companyName}
            startDate={datas.startDate}
            endDate={datas.endDate}
            summary={datas.summary}

        />)
    })

    const PreviewKeySkillsList = KeySkills.map((datas,index)=>{

        return (
            <PreviewKeySkills key={datas.id} KeySkills_item={datas.Skill}/>

        )

    })

    // ---------------------------------------------Print to pdf
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>printRef.current,
    });


    return (
        <div id={"Content-Containter"}>
            <div id={"User_Container"}>
                <div id={"UserDetails_Container"}>
                    <div className={"Section_header"}>
                        <img src={profilePic}/>
                        <p>Personal Details</p>
                    </div>
                    <UserDetails
                        FirstName={UserDetailes.FirstName}
                        LastName={UserDetailes.LastName}
                        Contact={UserDetailes.ContactNo}
                        Email={UserDetailes.Email}
                        Location={UserDetailes.Location}
                        Desc={UserDetailes.Description}
                        onchangeFn={onChangeUserDetails}
                    />
                </div>
                <div id={"Education_Container"}>
                    <div className={"Section_header"}>
                        <img src={EducationPic}/>
                        <p>Education</p>
                    </div>
                    {educationList}
                    <button className={"add-btn"} onClick={onAddeducation}>Add Education</button>
                </div>
                <div id={"Experience_Container"}>
                    <div className={"Section_header"}>
                        <img src={ExperiencePic}/>
                        <p>Experience</p>
                    </div>
                    {experienceList}
                    <button className={"add-btn"} onClick={onAddExperience}>Add Experience</button>
                </div>
                <div id={"skills_container"}>
                    <div className={"Section_header"}>
                        <img src={SkillsPic}/>
                        <p>Skills</p>
                    </div>
                    {KeySkillsList}
                    <div>
                        <input className={"input-text"} type={"text"}/>
                        <button className={"skill_add_btn"} onClick={addKeySkills}>Add Skill</button>
                        {/*<button className={"skill_add_btn"} onClick={handlePrint}>Add Skill</button>*/}

                    </div>
                </div>
                <button className={"add-btn print"} onClick={handlePrint}>Print CV</button>



            </div>


            <div ref={printRef} id={"Preview_container"}>
                <PreviewUserDetails
                    FirstName={UserDetailes.FirstName}
                    LastName={UserDetailes.LastName}
                    Contact={UserDetailes.ContactNo}
                    Email={UserDetailes.Email}
                    Location={UserDetailes.Location}
                    Desc={UserDetailes.Description}
                />
                <div className={"preview_SectionHeader"}>
                    <p>Education</p>
                </div>
                {PreviewEducationList}
                <div className={"preview_SectionHeader"}>
                    <p>Professional Experience</p>
                </div>
                {PreviewProfessionalExperienceList}
                <div className={"preview_SectionHeader"}>
                    <p>Key Skills</p>
                </div>
                {PreviewKeySkillsList}
            </div>
        </div>


    )
}