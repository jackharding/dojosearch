import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';

const _Slider = ({ images, settings }) => {
    return(
        <SliderWrap>
            <Slider 
                {...settings}
            >
                { images.map(img => (
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        key={`slider${img.src}`}
                    />
                )) }
            </Slider>
        </SliderWrap>
    );
}

const SliderWrap = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`;

_Slider.defaultProps = {
    settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
    }
}

export default _Slider;