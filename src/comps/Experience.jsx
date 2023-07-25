
export default function Experiences(props){
    return(
        <div>
            <form id={props.id}>
                <label className={"forms-label"}> Position Title
                <input className={"input-text"} type={"text"} name={"position"} value={props.position} onChange={props.onChangeExperience}/>
                </label>
                <label className={"forms-label"}> Company Name
                <input className={"input-text"} type={"text"} name={"companyName"} value={props.companyName} onChange={props.onChangeExperience}/>
                </label>
                <label className={"forms-label"}> Start Date
                <input className={"forms-date"} type={"date"} name={"startDate"} value={props.startDate} onChange={props.onChangeExperience}/>
                </label>
                <label className={"forms-label"}> End Date
                <input className={"forms-date"} type={"date"} name={"endDate"} value={props.endDate} onChange={props.onChangeExperience}/>
                </label>
                <label className={"forms-label"}> Work Summary
                <textarea className={"input-text"}  name={"summary"} value={props.summary} onChange={props.onChangeExperience}></textarea>
                </label>

                {props.canDelete && <button onClick={props.onDeleteExperience}>Delete</button>}
            </form>
        </div>
    )
}