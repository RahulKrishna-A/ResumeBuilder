
export default function Experiences(props){
    return(
        <div>
            <form id={props.id}>
                <input type={"text"} name={"position"} value={props.position} onChange={props.onChangeExperience}/>
                <input type={"text"} name={"companyName"} value={props.companyName} onChange={props.onChangeExperience}/>

                <input type={"date"} name={"startDate"} value={props.startDate} onChange={props.onChangeExperience}/>
                <input type={"date"} name={"endDate"} value={props.endDate} onChange={props.onChangeExperience}/>
                <input type={"text"} name={"summary"} value={props.summary} onChange={props.onChangeExperience}/>

                {props.canDelete && <button onClick={props.onDeleteExperience}>Delete</button>}
            </form>
        </div>
    )
}