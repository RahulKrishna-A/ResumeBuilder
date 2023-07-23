

export default function UserDetails(props){

    return(
        <div id={"personalised_form"}>
            <input type={"text"} value={props.FirstName} name={"FirstName"} onChange={props.onchangeFn}/>
            <input type={"text"} value={props.LastName} name={"LastName"} onChange={props.onchangeFn}/>
            <input type={"text"} value={props.Contact} name={"ContactNo"} onChange={props.onchangeFn}/>
            <input type={"text"} value={props.Location} name={"Location"} onChange={props.onchangeFn}/>
            <textarea value={props.Desc} name={"Description"} onChange={props.onchangeFn}></textarea>
        </div>

    )
}