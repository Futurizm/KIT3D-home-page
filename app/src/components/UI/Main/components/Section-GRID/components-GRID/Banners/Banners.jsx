import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFetch from '../../../../../../hooks/useFetch/useFetch'
import styles from './ui/Banners.module.css'


const Banners = () => {
    const [data, setData] = useState({})

    const [fetching, isLoading, error] = useFetch(async () => {
        const response = await axios.get('http://localhost:1337/api/banners?populate=*')
        setData(response.data || {})
        return response
    })

    useEffect(() => {
        fetching()
    }, []);


    return ( 
        <div className={`${styles.grid__container} ${styles._container}`}>
                {data?.data?.map((banner, index) => (
                    <div
                        key={index}                        
                        className={`${styles.grid__card}`}
                        style={{
                            background: `url(http://localhost:1337${banner?.attributes?.banner?.data?.attributes?.formats?.thumbnail?.url})`,
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
                ))}
        </div>
    );
}



 
export default Banners