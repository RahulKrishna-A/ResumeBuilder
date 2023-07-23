export default function Educations(props){


    return <div>
        <form id={props.id}>
            <input type={"text"} name={"SchoolName"} value={props.SchoolName} onChange={props.onChangeEducation}/>
            <input type={"text"} name={"SchoolLocation"} value={props.SchoolLocation} onChange={props.onChangeEducation}/>
            <input type={"text"} name={"FieldofStudy"} value={props.FieldofStudy} onChange={props.onChangeEducation}/>

            <input type={"date"} name={"startDate"} value={props.startDate} onChange={props.onChangeEducation}/>
            <input type={"date"} name={"endDate"} value={props.endDate} onChange={props.onChangeEducation}/>
            <textarea  name={"Description"} value={props.Description} onChange={props.onChangeEducation}></textarea>

            {props.canDelete && <button onClick={props.onDeleteEducation}>Delete</button>}
        </form>
    </div>
}