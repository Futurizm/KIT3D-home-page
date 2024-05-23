import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import useFetch from '../../../../../../hooks/useFetch/useFetch';
import styles from './ui/ProductsGridSlider.module.css';
import cart from '../../../../assets/Section-PRODUCTS/icons/cart.svg';
import left_arrow from '../../../../assets/Section-PRODUCTS/icons/left_arrow.svg'
import right_arrow from '../../../../assets/Section-PRODUCTS/icons/right_arrow.svg'

const ProductsGridSlider = () => {
    const [data, setData] = useState({});
    const [screenResolution, setScreenResolution] = useState({ width: 0, height: 0 });
    const sliderRef = useRef(null);

    const [fetching, isLoading, error] = useFetch(async () => {
        const response = await axios.get('http://localhost:1337/api/products?populate=*');
        setData(response.data || {});
        return response;
    });

    useEffect(() => {
        fetching();
    }, []);

    useEffect(() => {
        const updateScreenResolution = () => {
            const { width, height } = window.screen;
            setScreenResolution({ width, height });
        };

        updateScreenResolution();

        window.addEventListener('resize', updateScreenResolution);

        return () => {
            window.removeEventListener('resize', updateScreenResolution);
        };
    }, []);

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    console.log(data.data);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: screenResolution.width < 630 ? 1 : 2,
        slidesToScroll: screenResolution.width < 630 ? 1 : 2
    };

    return (
        <div className={styles.products__grid}>
            <div className={`${styles.products__grid__container} ${styles._container}`}>
                <h2 className={styles.products__grid__header}>Products You May Like</h2>
                <div className={styles.products__grid__card__container}>
                    {data?.data && data.data.length > 0 ? (
                        <Slider ref={sliderRef} {...settings}>
                        {data?.data?.map((product, index) => (
                            <div key={index} className={`${styles.products__grid__card} ${styles.card}`}>
                                <div className={styles.card__container}>
                                    <div className={styles.card__block}>
                                        <div className={styles.card__image}>
                                            <img
                                                className={styles.card__img}
                                                src={`http://localhost:1337${product?.attributes?.product_img?.data?.attributes?.url}`}
                                                alt=""
                                            />
                                        </div>
                                        <p className={styles.card__titile}>{product?.attributes?.product_title}</p>
                                    </div>
                                    <div className={styles.card__price__related}>
                                        <div className={styles.card__price}>
                                            {product?.attributes?.product_price}${' '}
                                            <span className={styles.card__price__discount}>
                                                {product?.attributes?.product_price + 20}$
                                            </span>
                                        </div>
                                        <div className={styles.card__cart__image}>
                                            <img className={styles.card__cart__img} src={cart} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
                <div className={styles.products__grid__navigation__buttons}>
                    <button onClick={handlePrev}>
                        <img className={styles.products__grid__navigation__img} src={left_arrow} alt=""/>
                    </button>
                    <button onClick={handleNext}>
                        <img className={styles.products__grid__navigation__img} src={right_arrow} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsGridSlider;
