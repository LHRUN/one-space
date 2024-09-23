import { useRef } from "react"
import { MonotonFont } from "@/common/font"
import classNames from "classnames"
import styles from './index.module.css'
import { motion, useScroll, useTransform } from "framer-motion";
import LEOSvg from '@/assets/letter/leo.svg'
import ScrollDownSvg from '@/assets/icon/scroll-down.svg'
import { SECTION_TYPE } from "../tabs/constants";

const Home = () => {
  const containerRef = useRef(null)

  const scrollDownRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollDownRef,
    offset: ["end end", "start start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const lineOneRef = useRef(null)
  const { scrollYProgress: scrollYProgressByLineOne } = useScroll({
    target: lineOneRef,
    offset: ["end end", "start start"]
  })
  const lineOneOpacity = useTransform(scrollYProgressByLineOne, [0.7, 1], [1, 0])
  const lineOneTranslateX = useTransform(scrollYProgressByLineOne, [0.7, 1], ['0px', '100px'])

  const lineTwoRef = useRef(null)
  const { scrollYProgress: scrollYProgressByLineTwo } = useScroll({
    target: lineTwoRef,
    offset: ["end end", "start start"]
  })
  const lineTwoOpacity = useTransform(scrollYProgressByLineTwo, [0.7, 1], [1, 0])
  const lineTwoTranslateX = useTransform(scrollYProgressByLineTwo, [0.7, 1], ['0px', '-100px'])

  return (
    <div id={SECTION_TYPE.HOME} ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        ref={lineOneRef}
        className={classNames(`text-center break-all`, styles.title, MonotonFont.className)}
        style={{
          opacity: lineOneOpacity,
          translateX: lineOneTranslateX
        }}
      >
        Welcome
      </motion.div>
      <motion.div
        ref={lineTwoRef}
        className={classNames(`text-8xl text-center break-all mt-8`, styles.title, MonotonFont.className)}
        style={{
          opacity: lineTwoOpacity,
          translateX: lineTwoTranslateX
        }}
      >
        To &nbsp;&nbsp; My &nbsp;&nbsp; Space
      </motion.div>
      <div className={classNames(`text-8xl text-center flex items-end justify-center break-all mt-8`, styles.title, MonotonFont.className)}>
        <span>I{`'`}m</span>
        <motion.div
          drag
          dragConstraints={containerRef}
          className="flex items-center border-dashed rounded-xl cursor-pointer relative scale-90 ml-4"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 20px 0px'
          }}
        >
          <LEOSvg
            width="27"
            height="12"
            viewBox="0 0 27 12"
            className={classNames(`relative z-[2]`, styles.letter)}
          />
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[1] rounded-xl">
          </div>
          <div className="w-full h-full absolute top-0 left-0 z-[0] bg-[#E9EFEC] opacity-60 rounded-xl"></div>
        </motion.div>
      </div>

      <motion.div
        ref={scrollDownRef}
        className="absolute bottom-10 left-1/2 flex flex-col items-center justify-center -translate-x-1/2"
        animate={{
          translateY: [0, '5px', '0px', '-5px', 0],
          translateX: ['-50%']
        }}
        transition={{
          duration: 1,
          ease: "circOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        style={{
          opacity
        }}
      >
        <div className="mb-1">Scroll Down</div>
        <ScrollDownSvg />
      </motion.div>
    </div>
  )
}

export default Home
