import {getId} from "../../methods/index";

export function SkillsCarts({data, lang}){
   
    const skillsCart = data.skills.map((el,i)=>{
        return <div key={getId(i)} className="section-skills__cart">
                    <h3 className="cart-title" lang={lang}>{el.title}</h3>
                    <ul className="cart-list">
                        {
                            el.text.map((el,a)=>{
                                return <li key={getId(a)} className="cart-list-item"><p>{el}</p></li>
                            })
                        }
                    </ul>
                </div>
    })

    return (
        <div className="section-skills__wrap">
            <h2 className="section-skills__title" lang={lang}>{data.title}</h2>
            {skillsCart}
        </div>
    )
}