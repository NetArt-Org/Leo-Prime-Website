import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function SwiperSlider({ children }) {
    return (
        <div style={{ width: "100%" }}>
            <Swiper
            navigation={true} modules={[Navigation]}
                effect="fade"
                grabCursor={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: { slidesPerView: "auto", },
                }}
                slidesPerView={"auto"} // Show 3 slides at a time
                spaceBetween={30}
                className="mySwiper"
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", width:"360px"}}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;
