
export default function KeySkill(props){
    return(
        <div>
            <p>{props.skill}</p>
            <button id={props.id} className={"dlt-btn"}  onClick={props.deletekeySkills}>Skill detell</button>
        </div>
    )
}