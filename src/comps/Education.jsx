export default function Educations(props){


    return <div>
        <form id={props.id}>
            <label className={"forms-label"}> School Name
            <input className={"input-text"} type={"text"} name={"SchoolName"} value={props.SchoolName} onChange={props.onChangeEducation}/>
            </label>
            <label className={"forms-label"}> School Location
            <input className={"input-text"} type={"text"} name={"SchoolLocation"} value={props.SchoolLocation} onChange={props.onChangeEducation}/>
            </label>
            <label className={"forms-label"}> Field of Study
            <input className={"input-text"} type={"text"} name={"FieldofStudy"} value={props.FieldofStudy} onChange={props.onChangeEducation}/>
            </label>
            <label className={"forms-label"}> Start Date

            <input className={"forms-date"} type={"date"} name={"startDate"} value={props.startDate} onChange={props.onChangeEducation}/>
            </label>
            <label className={"forms-label"}> End Date
            <input className={"forms-date"} type={"date"} name={"endDate"} value={props.endDate} onChange={props.onChangeEducation}/>
            </label>
            <label className={"forms-label"}> Description
            <textarea className={"input-text"} name={"Description"} value={props.Description} onChange={props.onChangeEducation}></textarea>
            </label>

            {props.canDelete && <button onClick={props.onDeleteEducation}>Delete</button>}
        </form>
    </div>
}