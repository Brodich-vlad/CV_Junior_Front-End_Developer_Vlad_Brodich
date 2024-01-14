import { useContext } from "react";
import {getId} from "../../methods/index";
import { ThemeContext } from "../../state/state";

export function SkillsCarts() {
    
  const state = useContext(ThemeContext);
  const skillsCart = state.summary.skills.skills.map((el, i) => {
    return (
      <div key={getId(i)} className="section-skills__cart">
        <h3 className="cart-title" lang={state.language}>
          {el.title}
        </h3>
        <ul className="cart-list">
          {el.text.map((el, a) => {
            return (
              <li key={getId(a)} className="cart-list-item">
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="section-skills__wrap">
      <h2 className="section-skills__title" lang={state.language}>
        {state.summary.skills.title}
      </h2>
      {skillsCart}
    </div>
  );
}