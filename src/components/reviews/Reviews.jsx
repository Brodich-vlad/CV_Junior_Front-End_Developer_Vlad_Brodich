// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import './Reviews.css';
import { useContext, useState } from "react";
import { ThemeContext } from "../../state/state";
import { getId } from '../../methods';
import Modal from '../modal/Modal';
import { bodyLock} from '../../methods/bodyLock';

export default function Reviews() {
  const state = useContext(ThemeContext);
  const[ full, setFull ] = useState(null)

  const hendleClose =()=>{
    setFull(null)
    bodyLock(false)
  }

  const hendleOpen=(data)=>{
    setFull(data)
    bodyLock(true)
  }

  const items = (data)=>{
    return data.map((el,i)=>{
      return (
        <SwiperSlide>
        <div className='reviews__list-item'
          key={getId(i)} 
          onClick={()=>{
            hendleOpen(el)
          }}>
          <img src={el.img} 
          alt={el.title}/>
        </div>
        </SwiperSlide>
      )
    })
  }


  return (
    <div className="section-reviews__wrap">
      <h2 className="section-reviews__title" lang={state.language}>
				{state.summary.reviews.title}
			</h2> 
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items(state.summary.reviews.reviews)}
      </Swiper>
      {full && <Modal data={full} close={hendleClose}/>}
    </div>
  )
}