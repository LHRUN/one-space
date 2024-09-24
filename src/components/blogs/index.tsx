import { MonotonFont } from "@/common/font"
import classNames from "classnames"
import Image from 'next/image'
import { BreeSerifFont } from "@/common/font"
import NavSvg from '@/assets/icon/navigation.svg'
import { SECTION_TYPE } from "../tabs/constants"

const blogList = [
  {
    img: '/projects/paint-board.png',
    title: 'Exploring the Canvas Series: Creative Brushes Part 3',
    date: 'Apr 16, 2024',
    link: 'https://songlh.top/2024/04/16/Exploring-the-Canvas-Series-Creative-Brushes-Part-3/'
  },
  {
    img: '/projects/paint-board.png',
    title: 'Exploring the Canvas Series: Creative Brushes Part 2',
    date: 'Apr 15, 2024',
    link: 'https://songlh.top/2024/04/15/Exploring-the-Canvas-Series-Creative-Brushes-Part-2/'
  },
  {
    img: '/projects/paint-board.png',
    title: 'Exploring the Canvas Series: Creative Brushes Part 1',
    date: 'Apr 14, 2024',
    link: 'https://songlh.top/2024/04/14/Exploring-the-Canvas-Series-Creative-Brushes-Part-1/'
  },
]

const Blogs = () => {

  return (
    <div id={SECTION_TYPE.BLOGS} className="mt-32 pt-40 w-[90%] max-w-[1040px] mx-auto">
      <div className={classNames(`w-full text-center text-6xl`, MonotonFont.className)}>
        Blogs
      </div>

      <div
        className="w-full mx-auto flex justify-center items-center mt-24 relative rounded-3xl"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px'
        }}
      >
        <div className="w-full px-12 py-6 relative z-[1]">
          {
            blogList.map((blog, index) => (
              <a
                key={index}
                className="flex py-10 border-b-[1px] border-solid border-[#6D5D6E] gap-x-8"
                href={blog.link}
                target="_blank"
              >
                <Image
                  src={blog.img}
                  alt="blog cover"
                  className="shrink-0 w-40 h-fit max-w-[40%]"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-center" >
                  <div className={classNames(`text-lg`, BreeSerifFont.className)}>{blog.date}</div>
                  <div className={classNames(`text-2xl mt-2`, BreeSerifFont.className)}>{blog.title}</div>
                </div>
              </a>
            ))
          }

          <div className="flex justify-center w-full">
            <a href="https://songlh.top/archives/" target="_blank" className="inline-flex items-center px-5 py-2 rounded-3xl mt-8 mx-auto cursor-pointer hover:scale-105 transition-all bg-[#2C3333]">
              <span className={classNames(`text-white mr-4`, BreeSerifFont.className)}>View More</span>
              <NavSvg className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
        </div>
      </div>
    </div>
  )
}

export default Blogs
