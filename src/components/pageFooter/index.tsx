import { BreeSerifFont } from '@/common/font'
import classNames from 'classnames'
import styles from './index.module.css'
import FaceSVG from '@/assets/face.svg'

const PageFooter = () => {
  return (
    <div className='flex flex-col py-56 mx-auto items-center justify-center w-[90%] max-w-[1040px]'>
      <div className='relative'>
        <FaceSVG className={classNames(`w-20 h-20`, styles['twinkle-display'])} />
        <FaceSVG className={classNames(`w-20 h-20`, styles['twinkle-style'])} />
      </div>
      <span className={classNames(`text-2xl mt-6`, BreeSerifFont.className)}>
        {
          `Thank you very much for visiting my personal website! I'm passionate about making new friends and am more than happy to communicate about various industry topics or emerging technologies. Feel free to reach out to me with any questions you may have or if you'd like to discuss anything in any direction. Thank you for your interest!`
        }
      </span>
    </div>
  )
}

export default PageFooter
