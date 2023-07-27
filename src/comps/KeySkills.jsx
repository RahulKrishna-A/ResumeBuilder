import "./styles/keySkills.css"


export default function KeySkill(props){
    return(
        <div className={"individual_skills"}>
            <p>{props.skill}</p>
            <button id={props.id} className={"skill_dlt"}  onClick={props.deletekeySkills}>Delete Skill</button>
        </div>
    )
}