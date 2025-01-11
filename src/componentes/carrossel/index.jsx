import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Carousel = () => {
    const slides = [
        {
            id: 1,
            image: './Galeria/teste.jpg',
            title: 'Novo Single',
            subtitle: 'Ouça agora em todas as plataformas'
        },
        {
            id: 2,
            image: './Galeria/teste1.jpg',
            title: 'Shows 2024',
            subtitle: 'Confira as datas da turnê'
        },
        {
            id: 3,
            image: './Galeria/teste5.webp',
            title: 'Colaborações',
            subtitle: 'Featuring com os maiores do trap'
        },
      
    ];

    return (
        <div className="py-12 bg-black">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full py-12"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full sm:w-[400px]">
                        <div className="relative group">
                            {/* Imagem do Slide */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[400px] object-cover rounded-lg transform 
                                         transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Overlay com texto */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 
                                          to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                                          duration-300 flex flex-col justify-end p-6 rounded-lg">
                                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 
                                             group-hover:translate-y-0 transition-transform duration-300">
                                    {slide.title}
                                </h3>
                                <p className="text-gray-300 transform translate-y-4 
                                            group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;