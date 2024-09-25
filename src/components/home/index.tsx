import { useCallback, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { SECTION_TYPE } from "../tabs/constants"

import LEOSvg from "@/assets/letter/leo.svg"
import ScrollDownSvg from "@/assets/icon/scroll-down.svg"

import { MonotonFont } from "@/common/font"
import classNames from "classnames"
import styles from "./index.module.css"

const threshold: number[] = []
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i)
}

const Home = () => {
  const { ref, entry } = useInView({
    threshold
  })

  const lineOpacity = useCallback((threshold: number) => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1)  {
      return 1
    }
    return entry.intersectionRatio < threshold ? 0 : (entry.intersectionRatio - threshold) / (1 - threshold)
  }, [entry?.intersectionRatio])

  const lineTranslate = useCallback((threshold: number, translateX: number) => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1)  {
      return "translateX(0px)"
    }
    return `translateX(${entry.intersectionRatio < threshold ? translateX : (1 - (entry?.intersectionRatio -  threshold) / (1 - threshold)) * translateX}px)`
  }, [entry?.intersectionRatio])

  const scrollDownOpacity = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1)  {
      return 1
    }
    return entry?.intersectionRatio < 0.5 ? 0 : (entry?.intersectionRatio - 0.5) / 0.5
  }, [entry?.intersectionRatio])

  return (
    <div id={SECTION_TYPE.HOME} ref={ref} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div
        className={classNames("text-center break-all transition-all duration-200", styles.title, MonotonFont.className)}
        style={{
          opacity: lineOpacity(0.6),
          transform: lineTranslate(0.6, 100)
        }}
      >
        Welcome
      </div>
      <div
        className={classNames("text-8xl text-center break-all transition-all duration-200 mt-8", styles.title, MonotonFont.className)}
        style={{
          opacity: lineOpacity(0.5),
          transform: lineTranslate(0.5, -100)
        }}
      >
        To &nbsp;&nbsp; My &nbsp;&nbsp; Space
      </div>
      <div
        className={classNames("text-8xl text-center flex items-end justify-center break-all mt-8 transition-all duration-200", styles.title, MonotonFont.className)}
        style={{
          opacity: lineOpacity(0.4),
          transform: lineTranslate(0.4, 100)
        }}
      >
        <span>I{"'"}m</span>
        <div
          className="flex items-center border-dashed rounded-xl relative scale-90 ml-4"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 20px 0px"
          }}
        >
          <LEOSvg
            width="27"
            height="12"
            viewBox="0 0 27 12"
            className={classNames("relative z-[2]", styles.letter)}
          />
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[1] rounded-xl">
          </div>
          <div className="w-full h-full absolute top-0 left-0 z-[0] bg-[#E9EFEC] opacity-60 rounded-xl"></div>
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center">
        <div
          className="flex flex-col items-center justify-center animate-bounce transition-all"
          style={{
            opacity: scrollDownOpacity
          }}
        >
          <div className="mb-1">Scroll Down</div>
          <ScrollDownSvg />
        </div>
      </div>
    </div>
  )
}

export default Home
