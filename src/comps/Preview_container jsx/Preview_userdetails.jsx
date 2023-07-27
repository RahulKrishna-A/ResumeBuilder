import "../styles/previewContainerStyles/Preview_userdetails.css"


export default function PreviewUserDetails(props){

    return(
        <div >
            <div className={"prev_user_details"}>
                <div className={"prev_user_details-initial"}>
                    CC
                </div>
                <div className={"prev_user_details-name-address"}>
                    <p>Chris</p>
                    <p>Candidate</p>
                    <p>email@youremail.com|(469) 385-2948|City</p>
                </div>
            </div>
            <div className={"prev_user_details-desc"}>

            </div>

        </div>
    )
}