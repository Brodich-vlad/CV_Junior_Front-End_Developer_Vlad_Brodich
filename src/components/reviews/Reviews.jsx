import './Reviews.css';
import { useContext } from "react";
import { ThemeContext } from "../../state/state";

export default function Reviews() {
  const state = useContext(ThemeContext);
  const items = (data)=>{
    return data.map((el)=>{
     return (
        <li className='reviews__list-item'>
          <img src={el.img} 
          alt={el.title}/>
        </li>)
    })
  }


  return (
    <div className="section-reviews__wrap">
      <h2 className="section-reviews__title" lang={state.language}>
				{state.summary.reviews.title}
			</h2> 

      <ul className='reviews__list'>
        {items(state.summary.reviews.reviews)}
      </ul>
    </div>
  )
}