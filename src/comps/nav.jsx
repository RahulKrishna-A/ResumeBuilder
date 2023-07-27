import "./styles/nav.css"
import logo from "../assets/resume_icon.png"

export default function Nav(){
    return(
        <div id={"nav_container"}>
            <img src={logo}/>
            <p>ResumeBuilder</p>
        </div>
    )
}