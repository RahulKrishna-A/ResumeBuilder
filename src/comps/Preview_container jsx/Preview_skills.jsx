import "../styles/previewContainerStyles/Preview_skills.css"

export default function PreviewKeySkills(props){
    return(
        <div className={"keyskills_point"}>
            <div className={"keyskills_pointer"}></div>
        <p className={"keyskills_point-p"}>{props.KeySkills_item}</p>
            </div>
    )
}