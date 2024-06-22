import { useGSAP } from "@gsap/react"
import { useEffect, useState } from "react";
import gsap from "gsap"
import {heroVideo, smallHeroVideo} from "../utils";



const Hero = () => {
    const [Videosrc, setVideosrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    const handelVideosrc = () => {
        if (window.innerWidth < 760) {
            setVideosrc(smallHeroVideo)
        }
        else{
            setVideosrc(heroVideo)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',handelVideosrc);
        return ()=>{
            window.removeEventListener('resize',handelVideosrc);
        }
    },[])
    useGSAP(()=>{
        gsap.to(".hero-title",{
            opacity:1,
            delay:1
        })
        gsap.to('#buy',{
            opacity:1,
            y:-50,
            delay:2
        })
    },[])
  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p className="hero-title">iPhone 15 Pro</p>
            <div className="md:w-10/12 w-9/12 ">
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={Videosrc}>
                    <source src={Videosrc} type="video/mp4"/>
                </video>
            </div>
        </div>
        <div id="buy" className="flex flex-col justify-center items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn transition">Buy</a>
            <p className="text-xl font-bold">From $199/mon or $999</p>
        </div>

    </section>
  )
}

export default Hero