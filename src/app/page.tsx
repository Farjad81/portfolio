"use client"
import { useState } from "react";
import VantaBackground from "@/app/components/VantaBackground";
import styles from "@/app/page.module.css";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import Project from "@/app/components/project";
import Connect from "./components/connect";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [selected, setSelected] = useState<'about' | 'skills' | 'project' | 'connect' |null>(null);
  return (
    <>
    <VantaBackground effect="globe"> {/* یا effect="net" */}
    <div className={styles.container}>

      <div className={styles.fixCard}>
        <div className={styles.fixCard_image}>
          <img src="/farjaddttt.png" alt="" width={370} height={350}/>
        </div>
        <div className={styles.fixCard_content}>
          <h2 className={styles.fixCard_h1}>Front-end developer</h2>
          <div className={styles.logos}>
            <a href="">
              <img src="/GitHub.png" alt="" width={40} height={40} />
            </a>
            <a href="">
              <img src="/Gmail.png" alt="" width={40} height={40}/>
            </a>
            <a href="">
              <img src="/Linkedin.png" alt="" width={40} height={40}/>
            </a>
            <a href="">
              <img src="/Instagram.png" alt="" width={40} height={40}/>
            </a>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} style={{borderRight:"1px solid white"}}>
              DOWLOAD CV
            </button>
            <button className={styles.button}>
              CONNECT ME
            </button>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <a className={styles.headerA} onClick={() => setSelected('about')}> About me </a>
        <a className={styles.headerA} onClick={() => setSelected('skills')}> Skills </a>
        <a className={styles.headerA} onClick={() => setSelected('project')}> Project </a>
        <a className={styles.headerA}> Experianse </a>
        <a className={styles.headerA} onClick={()=> setSelected('connect')}> Connect me </a>
      </div>
      <div className={styles.animatedCard} id="Card">
      {selected === 'about' && <About />}
      {selected === 'skills' && <Skills />}
      {selected === 'project' && <Project />}
      {selected === 'connect' && <Connect />}
        {/* <About /> */}
        {/* <Skills /> */}
      </div>
    </div>
    </VantaBackground>
    </>
  );
}
