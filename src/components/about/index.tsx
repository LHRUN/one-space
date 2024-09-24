import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import { SECTION_TYPE } from "../tabs/constants";
import styles from './index.module.css'
import GithubSVG from '@/assets/icon/github.svg'
import TwitterSVG from '@/assets/icon/twitter.svg'
import GmailSVG from '@/assets/icon/gmail.svg'
import TelegramSVG from '@/assets/icon/telegram.svg'
import V2exSVG from '@/assets/icon/v2ex.svg'

const contactList = [
  {
    icon: GithubSVG,
    link: 'https://github.com/LHRUN'
  },
  {
    icon: TwitterSVG,
    link: 'https://twitter.com/Song_LongHao'
  },
  {
    icon: GmailSVG,
    email: 'mailto:song.lhlh@gmail.com'
  },
  {
    icon: TelegramSVG,
    link: 'https://twitter.com/Song_LongHao'
  },
  {
    icon: V2exSVG,
    link: 'https://www.v2ex.com/member/LHRUN'
  },
]

const About = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["end end", "start start"]
  })
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["10%", "50%"])

  return (
    <div
      id={SECTION_TYPE.ABOUT}
      className="flex flex-col items-center justify-center pt-28 w-[90%] max-w-[1040px] mx-auto"
    >
      <div
        ref={imgRef}
        className={classNames(`relative cursor-pointer w-64 h-64`, styles.avatar)}
      >
        <motion.img
          src="/profile_cover-pixelicious.png"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 z-[1]"
          style={{
            borderRadius,
            backfaceVisibility: 'hidden',
          }}
        />
        <motion.img
          src="/profile_cover.jpg"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0"
          style={{
            borderRadius
          }}
        />
      </div>

      <div className={classNames(`text-2xl`, BreeSerifFont.className)}>
        <div className="flex items-center justify-center gap-x-3 mt-16 mb-10">
          {
            contactList.map((item, index) => (
              <a
                href={item.email || item.link}
                target="_blank"
                className="p-1 border-black rounded-lg border-2 cursor-pointer hover:scale-110 transition-all"
                key={index}
              >
                <item.icon className="w-7 h-7" />
              </a>
            ))
          }
        </div>

        Hello, I{`'`}m Leo{`(`}宋龙浩{`)`}, a Front End Developer with many years of experience. Welcome to my personal space! I focus on C-end project development, pursuing the ultimate aesthetic design and excellent user experience. In each project, I always maintain a high degree of enthusiasm and focus. I am usually keen to participate in open source projects and constantly explore cutting-edge technologies, and I am committed to creating truly extraordinary works that leave a mark worth remembering.
        
        <div className="mt-6">
          If you{`'`}d like to get to know me better, please to scroll down.
        </div>
      </div>
    </div>
  )
}

export default About
