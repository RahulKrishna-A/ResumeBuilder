export default function Educations(props){
    // eslint-disable-next-line react/prop-types
    const EducationForms = props.education.map((datas)=>{
        return(<form key={datas.id}>
            <input type={"text"} name={"position"} value={datas.position} onChange={props.onChangeEducation}/>
            <input type={"text"} name={"companyName"} value={datas.companyName} onChange={props.onChangeEducation}/>
            <input type={"date"} name={"startDate"} value={datas.startDate} onChange={props.onChangeEducation}/>
            <input type={"date"} name={"endDate"} value={datas.endDate} onChange={props.onChangeEducation}/>
            <input type={"text"} name={"summary"} value={datas.summary} onChange={props.onChangeEducation}/>
            <button onClick={props.onAddeducation}>hiiiii</button>

        </form>)
    })


    return <div >
        {EducationForms}

    </div>
}