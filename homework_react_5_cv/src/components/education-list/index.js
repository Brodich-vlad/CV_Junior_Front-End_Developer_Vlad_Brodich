import {getId} from "../../methods/index";
import certificate from "../../img/svg-icon/education_school_icon.svg"
// Секція освіта.
export function EducationList({data,lang}){
    const schools = data.schools.map(({profession, school, date, imgCertificate},i)=>{
        return <li key={getId(i)} className="section-education__list-item">
                    <h3 lang={lang}>{profession}</h3>
                    <p lang={lang}>{school}</p>
                    <p lang={lang}>{date}</p>
                    {
                        imgCertificate?<div className="section-education__list-item_imgs">
                            <div className="section-education__list-item_img"> <img src={certificate} alt="logo"/></div>
                            <div className="section-education__list-item_certificate"> <img src={imgCertificate} alt="logo"/></div>
                    </div>: undefined
                 }
                </li>
    })


    return(
        <div className="section-education__wrap">
            <h2 className="section-education__title" lang={lang}>{data.title}</h2>
            <ul className="section-education__list">
                {schools}
            </ul>
        </div>
    )
}