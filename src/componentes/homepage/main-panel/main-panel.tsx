
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { A11y, Pagination, Scrollbar, Navigation, Autoplay,  EffectFade} from 'swiper/modules';

export default function MainPanel(){

    

    return (
        <div className="flex items-center justify-center relative mt-40">
            {/* AJUSTAR PARA SCROLL OPACITY */}
            <div id="wrapper" className="w-full max-w-[800px] h-[325px] bg-primaryColor2 flex items-center justify-flex-start overflow-x-auto overflow-y-hidden rounded-lg gap-2 [-webkit-overflow-scrolling: touch;] snap-x snap-mandatory scroll-smooth scroll-wrapper relative">
                <Swiper  className='mySwiper w-full h-full'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                effect={'fade'}
           
                >
                    <SwiperSlide> <div className="flex items-center justify-center  bg-center bg-cover w-full h-full flex-shrink-0 sticky scroll-smooth snap-start pointer-events-none"> <img className='flex w-full h-full' src="./frutos-panel.jpg" alt="" /></div></SwiperSlide>
                    <SwiperSlide> <div className="flex items-center justify-center bg-[url(./photos_items/frutas-colhidas.jpg)] bg-center bg-cover w-full h-full flex-shrink-0 sticky scroll-smooth snap-start pointer-events-none"></div></SwiperSlide>
                    <SwiperSlide> <div className="flex items-center justify-center bg-[url(./pequeno-agricultor.jpg)] bg-center bg-cover w-full h-full flex-shrink-0 sticky scroll-smooth snap-start pointer-events-none"></div></SwiperSlide>
                ...
                </Swiper>
            </div>
        </div>
    )
}