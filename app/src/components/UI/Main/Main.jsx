import React from 'react';
import styles from "./ui/Main.module.css"
import Background from "./components/Section-IMG/Background";
import Slider from "./components/Section-SLIDER/Slider";
import Grid from "./components/Section-GRID/Grid";
import Products from "./components/Section-PRODUCTS/Products";

const Main = () => {
    return (
        <main className={styles.main}>
            <Background />
            <Slider />
            <Grid />
            <Products />
        </main>
    );
};

export default Main;