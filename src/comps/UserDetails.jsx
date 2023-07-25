

export default function UserDetails(props){

    return(
        <div id={"personalised_form"}>
            <label className={"forms-label"}> First Name
            <input className={"input-text"} type={"text"} value={props.FirstName} name={"FirstName"} onChange={props.onchangeFn}/>
            </label>
            <label className={"forms-label"}> Last Name
            <input className={"input-text"} type={"text"} value={props.LastName} name={"LastName"} onChange={props.onchangeFn}/>
            </label>
            <label className={"forms-label"}> Phone
            <input className={"input-text"} type={"text"} value={props.Contact} name={"ContactNo"} onChange={props.onchangeFn}/>
            </label>
            <label className={"forms-label"}> Email Address
                <input className={"input-text"} type={"text"} value={props.Email} name={"Email"} onChange={props.onchangeFn}/>
            </label>
            <label className={"forms-label"}> City
                <input className={"input-text"} type={"text"} value={props.Location} name={"Location"} onChange={props.onchangeFn}/>
            </label>
            <label className={"forms-label"}> Description
            <textarea className={"input-text"} value={props.Desc} name={"Description"} placeholder={"e.g. Dedicated [ High School ] Professor with [14] years Experience.."} onChange={props.onchangeFn}></textarea>
            </label>
        </div>

    )
}