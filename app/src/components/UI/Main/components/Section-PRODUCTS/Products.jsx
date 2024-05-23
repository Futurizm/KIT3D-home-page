import React, {useEffect, useState} from 'react';

import styles from './ui/Products.module.css'
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import ProductsGridSlider from "./components/ProductsGridSlider/ProductsGridSlider";

const Products = () => {
    const [screenResolution, setScreenResolution] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateScreenResolution = () => {
            const { width, height } = window.screen
            setScreenResolution({ width, height })
        }

        updateScreenResolution()

        window.addEventListener('resize', updateScreenResolution)

        return () => {
            window.removeEventListener('resize', updateScreenResolution)
        }
    }, []);

    return (
        <section className={styles.products}>
            {screenResolution.width < 768
            ? <ProductsGridSlider />
            : <ProductsGrid />}

        </section>
    );
};

export default Products;