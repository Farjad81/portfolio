'use client';
import { useEffect } from "react";
import styles from "@/app/components/styles/about.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default function About(){
      useEffect(() => {
    AOS.init();
  }, []);
    return(
        <>
            <div className={styles.main} data-aos="fade-down"data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
                <h1 className={styles.h1}>I am Farjad Talebpour
                Front-End Developer...</h1>
                <div className={styles.content}>
                    <p>Hi! I'm [Farjad], a front-end developer who loves building beautiful and user-friendly interfaces. I've been working hard on my front-end skills for the past year, and I've been working on several personal projects along the way. I'm fairly familiar with technologies like HTML, CSS, JavaScript, Tailwind, Next.js, and TypeScript, and I also have a good understanding of PHP and Laravel. I created this portfolio to be both a resume of my journey and a way to connect with employers looking for a creative and meticulous developer. If you're interested in my skills, I'd be happy to work with you!</p>
                </div>
                {/* <img src="/Web Development 3D Model.png" alt="" width={100} height={100}/> */}
            </div>
        </>
    )
}
