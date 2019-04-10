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

    .slick-dots {
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            display: inline-block;

            +li {
                margin-left: 6px;
            }

            &.slick-active {
                button {
                    opacity: 1;
                }
            }
        }

        button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${({ theme }) => theme.white};
            font-size: 0;
            opacity: .75;
        }
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