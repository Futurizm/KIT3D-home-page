import React, {useEffect, useState} from 'react'
import styles from "./ui/Grid.module.css"
import Banners from './components-GRID/Banners/Banners'
import SliderBanners from './components-GRID/Banners/components/SliderBanners'
import arrow from '../../assets/Section-GRID/icons/arrow.svg'
import monumentsImage from '../../assets/Section-GRID/monuments.png'; // Import the image



const Grid = () => {

    const [screenResolution, setScreenResolution] = useState({width: 0, height: 0})


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

    }, [])
    

    return (
        <section className={styles.grid}>
            {
                screenResolution.width <= 768
                ? <SliderBanners />
                : <Banners />
            }

            <div className={styles.grid__banner}>
                <div 
                    className={`${styles.grid__banner__container} ${styles._container}`}
                    style={{
                        background: `url(${monumentsImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className={styles.grid__banner__text__block}>
                        <h3 className={styles.grid__banner__header}>KIT 3D</h3>
                        <h3 className={styles.grid__banner__header}>The Highest Quality Plastic</h3>
                    </div>
                    <div className={styles.grid__banner__button}>
                        <button className={styles.banner__button}>
                            Show Products 
                            <img src={arrow} alt="Doesn't work" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Grid;