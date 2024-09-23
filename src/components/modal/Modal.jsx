import clsx from 'clsx'
import './modal.css'
//import { useBodyLock } from '../../methods/useBodyLock'

export default function Modal({data, close}) {
  if(data){
    // useBodyLock(true)
  }
  
  return (
    <div className={clsx('wrapper__modal')} 
      onClick={(ev)=>{
        ev.stopPropagation()
        close()}}>
      <div className='modal_scroll'>
        <div className='modal_content' onClick={(ev)=>{ev.stopPropagation()}}>
          <img src={data.img} alt={data.title}/>
          <button type='button' 
            className='close_btn' 
            onClick={close}>
              <span>&#x2716;</span>
          </button>
        </div>
      </div>
    </div>
  )
}