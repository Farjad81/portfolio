'use client';
import styles from "@/app/components/styles/skills.module.css";
import styless from "@/app/components/styles/skillCard.module.css";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default function Skills (){
         useEffect(()=>{
            AOS.init();
        })
    return(
        <>
            <div className={styles.container} data-aos="fade-down"data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/html-5.png" alt="" width={40} height={40} />
                <p>Html</p>
            </div>
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/css-3.png" alt="" width={40} height={40} />
                <p>Css</p>
            </div>
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/js.png" alt="" width={40} height={40}/>
                <p>java script</p>
            </div>
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/next.svg" alt="" width={40} height={40}/>
                <p>Next Js</p>
            </div>
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/physics.png" alt="" width={40} height={40}/>
                <p>React</p>
            </div>
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/php.png" alt="" width={40} height={40}/>
                <p>Php</p>
            </div>
            <div className={styless.body} data-aos="zoom-in" data-aos-duration="2000">
                <img src="/skills_icons/R.png" alt="" width={40} height={40}/>
                <p>Laravel</p>
            </div>
            </div>
        </>
    )
}
