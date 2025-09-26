"use client";
import styles from "@/app/components/styles/connect.module.css"
import { useState } from 'react';
export default function Connect(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return(
        <>
        <div className={styles.container} data-aos="fade-down"data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <div className={styles.social}>
            <div className={styles.socialitems}>
            <img src="/Instagram.png" alt="" width={40} height={40}/>
            <a href="">https.frjad</a>
            </div>
            <div className={styles.socialitems}>
            <img src="/GitHub.png" alt="" width={40} height={40}/>
            <a href="">Farjad81</a>
            </div>
            <div className={styles.socialitems}>
            <img src="Vector.png" alt="" width={20} height={20}/>
            <a href="">@frjaad</a>
            </div>
            <div className={styles.socialitems}>
            <img src="/PhoneCall.svg" alt="" width={20} height={20}/>
            <a href="">0992-544-0212</a>
            </div>
        </div>
        <div className={styles.form}>
            <form action="" method="post">
                <div className={styles.content}>
                    <div >
                        <input className={styles.input} type="text" name="" id="name" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Your Name" />
                    </div>
                    <div>
                        <input className={styles.input} type="text" name="" id="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"  />
                    </div>
                    <div>
                        <textarea className={styles.texterea} name="" id="message" value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Message" ></textarea>
                    </div>
                    <div>
                        <input className={styles.submit} type="submit" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
            
        </div>
        </>
    )
}
