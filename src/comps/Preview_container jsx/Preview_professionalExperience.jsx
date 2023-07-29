import "../styles/previewContainerStyles/Preview_professionalExperience.css"
import {format} from "date-fns";
export default function PreviewProfessionalExperience(props){
    let StartDate,EndDate
    if(props.startDate){
        StartDate = format(new Date(props.startDate),"MMM yyyy")
    }
    if(props.endDate){
        EndDate = format(new Date(props.endDate),"MMM yyyy")
    }
    return(
        <div className={"reusable_prev_experience"}>
            <div className={"prev_experience_positionAndCompany"}>
                <p className={"prev_experience_position font-Libre"}>
                    {props.position}</p>
                <p className={"prev_experience_Company"}>
                   {props.companyName}  {props.startDate &&"|"} {StartDate} - {EndDate}
                </p>
            </div>
            <div className={"prev_experience_desc"}>
                {props.summary}
                             </div>
        </div>
    )

}
