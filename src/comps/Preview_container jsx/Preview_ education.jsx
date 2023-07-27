import "../styles/previewContainerStyles/Preview_education.css"
export default function PreviewEducation(props){
    return(
        <div className={"reusable_prev_educations"}>
            <div className={"prev_education_degreeAndUni"}>
                <p className={"prev_education_degree font-Libre"}>Masters in Human Resources</p>
                <p className={"prev_education_uni"}>The University of Texas, Dallas | September 2007 - May 2011</p>
            </div>
            <div className={"prev_education_desc"}>
                Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit amet gravida molestie, orci dui eleifend sem, at blandit ipsum diam non purus. Duis dapibus nisi eget vehicula dignissim
            </div>
        </div>
    )

}
