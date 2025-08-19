import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { VillagerList } from './data';

export default function Slick() {
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // centerPadding: "100px", //only use on 5 or more slides
        infinite: true, 
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        focusOnSelect: true,
        // rtl: true //scrolls opposite direction
    };
    return (
    <>
        <div className="content">
            <h1 className="header">Animal Crossing</h1>
            <div className="container">
                <Slider {...settings}> 
                    {VillagerList.map((thisOne) => (
                        <div key={thisOne.key}>
                            <div className="img-body">
                                <img src={thisOne.src}></img>
                            </div>
                            <h2>{thisOne.name}</h2>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </>
    );
}
