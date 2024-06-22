import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarasol from "./VideoCarasol"

const Highlights = () => {
  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0
    })
    gsap.to('.link',{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.5
    })
  },[])
  return (
    <section id="highlights" className=" w-screen bg-zinc overflow-hidden h-full common-padding">
      <div className=" screen-max-width">
        <div className="w-full md:flex justify-between items-end mb-12">
          <h1 id="title" className="section-heading">Get the Hightlights</h1>
          <div className=" flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2"/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2"/>
            </p>
          </div>
        </div>
        <VideoCarasol/>
      </div>
    </section>
  )
}

export default Highlights