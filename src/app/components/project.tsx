'use client';
import styles from '@/app/components/styles/project.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default function Project (){
         useEffect(()=>{
            AOS.init();
        })
    return(
        <>
        <div className={styles.container}  data-aos="fade-down"data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <div className={styles.card} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/projects/Screenshot 2025-03-25 at 02-02-16 UI project.png" alt="" className={styles.cardImage}/>
                <div className={styles.overlay}>
                 <p>PetShop site Project</p>
                </div>
            </div>
            <div className={styles.card} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/projects/Screenshot_25-3-2025_1332_localhost.jpeg" alt="" className={styles.cardImage}/>
                <div className={styles.overlay}>
                 <p>Portfolio Project</p>
                </div>
            </div>
            <div className={styles.card} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/projects/Screenshot_25-3-2025_3116_.jpeg" alt="" className={styles.cardImage}/>
                <div className={styles.overlay}>
                 <p>Store site project</p>
                </div>
            </div>
            <div className={styles.card} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/projects/Screenshot_25-3-2025_3448_.jpeg" alt="" className={styles.cardImage}/>
                <div className={styles.overlay}>
                 <p>Fitness club website project</p>
                </div>
            </div>
        </div>
        </>
    )
}
