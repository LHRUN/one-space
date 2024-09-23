import classNames from "classnames"
import { motion } from "framer-motion";
import { MonotonFont, BreeSerifFont } from "@/common/font"
import { SECTION_TYPE } from "../tabs/constants";
import Link from "../link";
import styles from './index.module.css'

const projectList = [
  {
    img: '/projects/paint-board.png',
    title: 'Paint Board',
    link: 'https://songlh.top/paint-board',
    github: 'https://github.com/LHRUN/paint-board',
    desc: 'Paint Board is a powerful WEB-based creative drawing board that integrates a variety of creative brushes and assistive drawing functions, allowing users to experience a new drawing effect. All the content is free, no login, instant use. At present, it has supported multiple terminals, whether it is mobile terminal, or PC terminal, all have better interactive experience and effect display.',
    author: `Paint Board is the project that I have invested the most effort in outside of work. From the preliminary research, to the prototype design and technical solution, to the in-depth study of colour matching and user interaction in the design stage, and the operation and promotion in the later stage, this project has greatly improved my ability in all aspects. Since its launch, Paint Board has also gained a lot of attention, which gives me a great sense of achievement and confidence to carry on. \n You are more than welcome to try it out! If you have any ideas, or found any bugs, please feel free to contact me, we can discuss and improve it together.`
  },
  {
    img: '/projects/bubble.png',
    title: 'Bubble',
    link: 'https://bubble-awesome-profile.vercel.app',
    github: 'https://github.com/LHRUN/bubble',
    desc: `Bubble is a platform dedicated to collecting GitHub Profile components, bringing together the coolest Profile and README components on GitHub. Users can log in, like and mark their favourite profiles. Currently, there are various styles of Profile components on the platform, which can satisfy the needs of different developers. If you don't have any inspiration at the moment, you can also check out other people's excellent configurations and presentations in the Profile tab for inspiration.`,
    author: `Bubble was the first project I worked on when I first got into full-stack, using a technology stack of Next.js + Prisma + PostgreSQL + NextAuth, in the hope that it would open up the world of full-stack as a first step into independent development.`
  },
  {
    img: '/projects/one-space.png',
    title: 'One Space',
    link: 'https://songlh.top',
    desc: 'One Space is the current website, as the first window to present myself, welcome to browse!'
  },
  {
    img: '/projects/md-editor.png',
    title: 'MD Editor',
    link: 'https://songlh.top/md-editor',
    github: 'https://github.com/LHRUN/md-editor',
    desc: 'md-editor is a markdown-it based markdown editor, including sync scrolling, multi file record,upload and download, generate toc, menu edit btn, code block theme switch, content state local cache...'
  },
  {
    img: '/projects/work.png',
    title: 'My Work',
    desc: 'The above are open source projects that I develop in my spare time. At work, I am a front-end development engineer mainly responsible for C-end projects, focusing on media and e-commerce industry. My work involves multiple platforms, including PC, mobile, mini program and APP. Brands worked and served include Converse, Coach, UA, and DJCars.',
    maxWidth: '200px'
  }
]

const Projects = () => {
  return (
    <div id={SECTION_TYPE.PROJECTS} className="w-full mt-32 pt-40 relative">
      <div
        className={classNames(`w-full text-center text-6xl`, MonotonFont.className)}
      >
        Projects
      </div>

      <div className="relative w-full">
        <div
          className="w-[90%] max-w-[1040px] mt-20 mx-auto relative rounded-3xl"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px'
          }}
        >
          <div className="relative z-[2]">
            {
              projectList.map((project, index) => (
                <div
                  className="flex px-10 gap-x-4 relative py-12"
                  key={index}
                  style={{
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                  }}
                >
                  <div className={classNames(`w-1/2 flex-1`, BreeSerifFont.className)}>
                    <div className="text-4xl text-center font-black">{project.title}</div>

                    <motion.img
                      src={project.img}
                      className={classNames(`w-full h-auto rounded-3xl py-5 mx-auto`, styles['img-top'])}
                      style={{
                        maxWidth: project.maxWidth || 'auto'
                      }}
                    /> 

                    {
                      project.link && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Link: </span>
                          <Link href={project.link} />
                        </div>
                      )
                    }
                    {
                      project.github && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Github: </span>
                          <Link href={project.github} />
                        </div>
                      )
                    }
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Desc: </span>
                      <span>
                        {project.desc}
                      </span>
                    </div>
                    {
                      project.author && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Author: </span>
                          <span className="whitespace-pre-line">
                            {project.author}
                          </span>
                        </div>
                      )
                    }
                  </div>

                  <div className={classNames(`w-1/2 h-fit shrink-0 sticky top-20 justify-center`, styles['img-side'])}>
                    <motion.img
                      src={project.img}
                      className="w-full h-fit rounded-3xl"
                      animate={{
                        translateY: [0, '10px', '0px', '-10px', 0]
                      }}
                      transition={{
                        duration: 3,
                        ease: "linear",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                      }}
                      style={{
                        maxWidth: project.maxWidth || 'auto'
                      }}
                    /> 
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
