import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import useFetch from '../../../../../../../hooks/useFetch/useFetch'
import styles from './ui/SliderBanners.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanners = () => {
    const [data, setData] = useState({})

    const [fetching, isLoading, error] = useFetch(async () => {
        const response = await axios.get('http://localhost:1337/api/banners?populate=*')
        setData(response.data || {})
        return response
    })

    useEffect(() => {
        fetching()
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }


    return ( 
        <Slider 
            {...settings}
            className={`${styles.grid__container} ${styles._container}`}
        >
                {data?.data?.map((banner, index) => (
                    <div>
                        <div
                            key={index}
                            className={`${styles.grid__card}`}
                            style={{
                                backgroundImage: `url(http://localhost:1337${banner?.attributes?.banner?.data?.attributes?.formats?.thumbnail?.url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                            }}
                        >

                        <div className={styles.grid__card__container}>
                            <div className={styles.grid__card__text__block}>
                                <div className={styles.grid__card__discount}>{banner?.attributes?.discount_price}% Discount</div>
                                <div className={styles.grid__card__discount__text}>{banner?.attributes?.discount_text}</div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
        </Slider>
    );
}


export default SliderBanners