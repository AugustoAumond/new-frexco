
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
        <section className="px-4 pb-8 pt-32 sm:px-6 sm:pt-36">
            <div className="relative mx-auto h-[440px] w-full max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#18372c] shadow-2xl shadow-[#18372c]/20 sm:h-[500px]">
                <Swiper className='mySwiper h-full w-full'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                effect={'fade'}
                >
                    <SwiperSlide><HeroSlide image="/frutos-panel.jpg" eyebrow="Frescor que chega perto" title="Da fazenda para a sua mesa." text="Frutas selecionadas para deixar a sua rotina mais saborosa." /></SwiperSlide>
                    <SwiperSlide><HeroSlide image="/frutas-colhidas.jpg" eyebrow="Colheita da semana" title="Mais cor, mais vida no seu prato." text="Descubra produtos que respeitam o tempo e o sabor da natureza." /></SwiperSlide>
                    <SwiperSlide><HeroSlide image="/pequeno-agricultor.jpg" eyebrow="Origem que importa" title="Pequenos produtores, grandes historias." text="Cada pedido apoia quem cultiva alimentos de verdade." /></SwiperSlide>
                </Swiper>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#18372c]/35 to-transparent" />
            </div>
        </section>
    )
}

interface HeroSlideProps {
    image: string;
    eyebrow: string;
    title: string;
    text: string;
}

function HeroSlide({ image, eyebrow, title, text }: HeroSlideProps) {
    return (
        <div className="relative h-full w-full">
            <img src={image} alt="Producao agricola Frexco" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10291f]/90 via-[#18372c]/45 to-transparent" />
            <div className="absolute inset-x-7 bottom-14 max-w-[600px] text-[#fffdf8] sm:inset-x-12 sm:bottom-16">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f7c96e]">{eyebrow}</p>
                <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-[1.05] sm:text-6xl">{title}</h1>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#f7f2e8] sm:text-base">{text}</p>
            </div>
        </div>
    )
}
