import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../../../../../../hooks/useFetch/useFetch';
import styles from './ui/ProductsGrid.module.css';
import katana from '../../../../assets/Section-PRODUCTS/katana.jpg';
import cart from '../../../../assets/Section-PRODUCTS/icons/cart.svg';

const ProductsGrid = () => {
    const [data, setData] = useState([]);
    const [fetching, isLoading, error] = useFetch(async () => {
        const response = await axios.get('http://localhost:1337/api/products?populate=*');
        setData(response.data || []);
        return response;
    });
    const [visiblePosts, setVisiblePosts] = useState(10);

    useEffect(() => {
        fetching();
    }, []);

    console.log(data);

    const showLoadMore = data?.data?.length > visiblePosts;

    const handleMoreClick = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 10);
    };

    return (
        <div className={styles.products__grid}>
            <div className={`${styles.products__grid__container} ${styles._container}`}>
                <h2 className={styles.products__grid__header}>Products You May Like</h2>
                <div className={styles.products__grid__card__container}>
                    {data?.data?.slice(0, visiblePosts).map((product, index) => (
                        <div key={index} className={`${styles.products__grid__card} ${styles.card}`}>
                            <div className={styles.card__container}>
                                <div className={styles.card__block}>
                                    <div className={styles.card__image}>
                                        <img className={styles.card__img} src={`http://localhost:1337${product?.attributes?.product_img?.data?.attributes?.url}`} alt=""/>
                                    </div>
                                    <p className={styles.card__titile}>{product?.attributes?.product_title}</p>
                                </div>
                                <div className={styles.card__price__related}>
                                    <div className={styles.card__price}>{product?.attributes?.product_price}$ <span className={styles.card__price__discount}>{product?.attributes?.product_price + 20}$</span></div>
                                    <div className={styles.card__cart__image}>
                                        <img className={styles.card__cart__img} src={cart} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showLoadMore && (
                    <div className={styles.products__grid__load__more__container}>
                        <button className={styles.products__grid__load__more} onClick={handleMoreClick}>More</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsGrid;
