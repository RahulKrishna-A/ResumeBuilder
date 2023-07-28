import "../styles/previewContainerStyles/Preview_education.css"
import {format} from "date-fns";

export default function PreviewEducation(props){
    let StartDate,EndDate
    if(props.startDate){
        StartDate = format(new Date(props.startDate),"MMM yyyy")
    }
    if(props.endDate){
        EndDate = format(new Date(props.endDate),"MMM yyyy")
    }
    return(
        <div className={"reusable_prev_educations"}>
            <div className={"prev_education_degreeAndUni"}>
                <p className={"prev_education_degree font-Libre"}>{props.FieldofStudy}</p>
                <p className={"prev_education_uni"}>{props.SchoolName} {props.SchoolLocation && ","}{props.SchoolLocation} {props.startDate &&"|"} {StartDate} - {EndDate}</p>
            </div>
            <div className={"prev_education_desc"}>
                {props.Description}
            </div>
        </div>
    )

}
