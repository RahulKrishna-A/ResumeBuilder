import "../styles/userContainerStyles/experience.css"
export default function Experiences(props){
    return(
        <div>
            <form id={props.id} className="experience-form">
                <label className="forms-label">
                    <p>Position Title</p>
                    <input className="input-text" type="text" name="position" value={props.position} onChange={props.onChangeExperience} />
                </label>

                <label className="forms-label">
                    <p>Company Name</p>
                    <input className="input-text" type="text" name="companyName" value={props.companyName} onChange={props.onChangeExperience} />
                </label>

                <label className="forms-label">
                    <p>Start Date</p>
                    <input className="forms-date" type="date" name="startDate" value={props.startDate} onChange={props.onChangeExperience} />
                </label>

                <label className="forms-label">
                    <p>End Date</p>
                    <input className="forms-date" type="date" name="endDate" value={props.endDate} onChange={props.onChangeExperience} />
                </label>

                <label className="forms-label">
                    <p>Work Summary</p>
                    <textarea className="input-text" name="summary" value={props.summary} onChange={props.onChangeExperience}></textarea>
                </label>

                {props.canDelete && <button className={"dlt-btn exp_dlt"}  onClick={props.onDeleteExperience}>Delete</button>}
            </form>
        </div>

    )
}