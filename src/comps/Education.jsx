import "./styles/education.css"

export default function Educations(props){


    return <div>
        <form id={props.id} className="education-form">
            <label className={"forms-label"}>
                <p>School Name</p>
                <input className={"input-text"} type={"text"} name={"SchoolName"} value={props.SchoolName} onChange={props.onChangeEducation} />
            </label>

            <label className={"forms-label"}>
                <p>School Location</p>
                <input className={"input-text"} type={"text"} name={"SchoolLocation"} value={props.SchoolLocation} onChange={props.onChangeEducation} />
            </label>

            <label className={"forms-label"}>
                <p>Field of Study</p>
                <input className={"input-text"} type={"text"} name={"FieldofStudy"} value={props.FieldofStudy} onChange={props.onChangeEducation} />
            </label>

            <label className={"forms-label"}>
                <p>Start Date</p>
                <input className={"forms-date"} type={"date"} name={"startDate"} value={props.startDate} onChange={props.onChangeEducation} />
            </label>

            <label className={"forms-label"}>
                <p>End Date</p>
                <input className={"forms-date"} type={"date"} name={"endDate"} value={props.endDate} onChange={props.onChangeEducation} />
            </label>

            <label className={"forms-label"}>
                <p>Description</p>
                <textarea className={"input-text"} name={"Description"} value={props.Description} onChange={props.onChangeEducation}></textarea>
            </label>

            {props.canDelete && <button className={"dlt-btn"} onClick={props.onDeleteEducation}>Delete</button>}
        </form>
    </div>

}