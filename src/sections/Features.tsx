'use client';

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from '@/assets/product-image.png'
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 10,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props: (typeof tabs)[number] & ComponentPropsWithRef<'div'> & {selected: boolean}) => {
  const lottieRef = useRef<DotLottieCommonPlayer>(null)
  const tabRef = useRef<HTMLDivElement>(null)

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`
  
  useEffect(()=>{
    if (!tabRef.current) return;
    const {height, width} = tabRef.current?.getBoundingClientRect()

    const circumference =  2 * height + 2 * width;

    const times = [0, width/circumference , (width+height)/circumference , (width * 2 +height)/circumference , 1]

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    }
    animate(xPercentage, [0, 100 , 100, 0 , 0], options)
    animate(yPercentage, [0 , 0 ,100 ,100 , 0], options)
  },[props.selected])

  const handleMouseEnter = () => {
    if (lottieRef.current === null) return
    lottieRef.current.seek(0)
    lottieRef.current.play()
  }
  return(
    <div ref={tabRef} onClick={props.onClick} onMouseEnter={handleMouseEnter} key={props.title} className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">
      {props.selected && 
        <motion.div 
        style={{
          maskImage
        }}

        className="absolute border inset-0 border-[#A369FF] rounded-lg -m-px"></motion.div>
      }
      
      <div className="size-12 border border-white/20 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer ref={lottieRef} src={props.icon} className="size-5" autoplay/>
      </div>
      <div>{props.title}</div>
      { props.isNew && <div className="text-xs bg-[#8c44ff] px-2 py-0.5 rounded-xl text-black">new</div>}
    </div>
  )
}

export const Features = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const backgroudPoisitonY = useMotionValue(tabs[0].backgroundPositionY)
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroudPoisitonY}%`

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`

  const handleSelectTab = (index: number) => {

    setSelectedTab(index)

    const options: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    }
    
    animate(backgroundSizeX, [backgroundSizeX.get(), 100 , tabs[0].backgroundSizeX] ,options)
    animate(backgroundPositionX,[backgroundPositionX.get(),tabs[index].backgroundPositionX], options)
    animate(backgroudPoisitonY, [backgroudPoisitonY,tabs[index].backgroundPositionY],options)
  }

  return <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">Elevate your SEO efforts.</h2>
      <p className="mt-5 md:text-xl max-w-2xl mx-auto text-center tracking-tight text-white/70 text-lg">
        From small startups to large enterprises, our AI-driven tool has revolutionized the way buisnesses approach SEO.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-3">
        {tabs.map( (tab, tabIndex) => (
          <FeatureTab 
            selected={selectedTab === tabIndex}
            onClick={() => handleSelectTab(tabIndex)} {...tab} key={tab.title}/>
        ))}
      </div>
      <div className="border border-white/20 rounded-xl p-2.5 mt-3">
        
        <motion.div
          className="aspect-video bg-cover border border-white/20 rounded-lg" 
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${productImage.src})`
          }}
        ></motion.div>
      </div>
      
    </div>
  </section>;
};
