import React, {useEffect, useState} from 'react'
import useFetch from "../../../../hooks/useFetch/useFetch"
import axios from "axios"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, A11y} from 'swiper/modules'
import 'swiper/css'
import styles from "./ui/Slider.module.css"
import arrow from "../../assets/Section-SLIDER/icons/arrow.svg"
import vase from "../../assets/Section-SLIDER/vase.jpg"
import katana from "../../assets/Section-SLIDER/katana.jpg"
import cart from "../../assets/Section-SLIDER/icons/cart.svg"
import left_arrow from "../../assets/Section-SLIDER/icons/left_arrow.svg"
import right_arrow from "../../assets/Section-SLIDER/icons/right_arrow.svg"

const Slider = () => {
    const [data, setData] = useState({})
    const [swiper, setSwiper] = useState(null)
    const [screenResolution, setScreenResolution] = useState({ width: 0, height: 0 });


    const [fetching, isLoading, Error] = useFetch(async () => {
        const response = await axios.get(`http://localhost:1337/api/posts?populate=*`)
        setData(response.data || {})
        return response
    })

    useEffect(() => {
        fetching()
    }, []);

    useEffect(() => {
      const updateScreenResolution = () => {
        const { width, height } = window.screen;
        setScreenResolution({ width, height });
      };
  
      updateScreenResolution(); // Call it once when the component mounts
  
      // Add event listener to update screen resolution when the window is resized
      window.addEventListener('resize', updateScreenResolution);
  
      // Cleanup function to remove event listener when component unmounts
      return () => {
        window.removeEventListener('resize', updateScreenResolution);
      };
    }, []);



    const handlePrevSlide = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    }

    const handleNextSlide = () => {
        if (swiper) {
            swiper.slideNext();
        }
    }

    return (
        <section className={styles.slider}>
            <div className={`${styles.slider__container} ${styles._container}`}>
                <div className={`${styles.slider__block__1} ${styles.block__1}`}>
                    <div className={styles.block__1__container}>
                        <h2 className={styles.block__1__header}>Discover Hot Deals for Your Atmosphere!</h2>
                        <p className={styles.block__1__paragraph}>In <span>KIT3D</span>, daily you can find the highest discounts across all categories and products available on the website.</p>
                        <button className={styles.block__1__button__block}>
                            Show All Products
                            <img src={arrow} alt=""/>
                        </button>
                    </div>
                </div>
                <div className={`${styles.slider__block__2} ${styles.block__2}`}>
                    <div className={styles.block__2__container}>
                        <div className={styles.block__2__arrow} onClick={handlePrevSlide}>
                            <img src={left_arrow} alt="Previous Slide"/>
                        </div>
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={screenResolution.width < 415 ? 5 : 25}
                                slidesPerView={
                                    screenResolution.width < 415
                                        ? 1
                                        : screenResolution.width < 720
                                            ? 2
                                            : 3
                                }
                                navigation={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={setSwiper}
                                loop={true}
                                touch={true}
                                className={styles.main__swiper}
                            >
                                {data?.data?.map((post, index) =>
                                    <SwiperSlide>
                                        <div className={`${styles.block__2__card} ${styles.card}`}>
                                            <div className={styles.card__content}>
                                                <div className={styles.card__image__block}>
                                                    <img className={styles.card__img}
                                                         src={`http://localhost:1337${post?.attributes?.post?.data[0]?.attributes?.url}`}
                                                         alt=""/>
                                                </div>
                                                <p className={styles.card__title}>{post?.attributes?.name}</p>
                                                <div className={styles.card__price__related}>
                                                    <div className={styles.card__price__block}>
                                                        <div className={styles.card__price}>{post?.attributes?.price}$</div>
                                                        <div
                                                            className={styles.card__discount}>{post?.attributes?.price + 20}$
                                                        </div>
                                                    </div>
                                                    <img className={styles.card__cart} src={cart} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        <div className={styles.block__2__arrow} onClick={handleNextSlide}>
                            <img src={right_arrow} alt="Previous Slide"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default Slider;