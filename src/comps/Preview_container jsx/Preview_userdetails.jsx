import "../styles/previewContainerStyles/Preview_userdetails.css"


export default function PreviewUserDetails(props){

    return(
        <div >
            <div className={"prev_user_details"}>
                <div className={"prev_user_details-initial"}>
                    {props.FirstName[0]}{props.LastName[0]}
                </div>
                <div className={"prev_user_details-name-address"}>
                    <p>{props.FirstName}</p>
                    <p>{props.LastName}</p>
                    <p>{props.Email} {props.Contact && "|"} {props.Contact} {props.Location &&"|"} {props.Location}</p>
                </div>
            </div>
            <div className={"prev_user_details-desc"}>
                <p>{props.Desc}</p>
            </div>

        </div>
    )
}