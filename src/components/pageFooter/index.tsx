import { BreeSerifFont } from '@/common/font'
import classNames from 'classnames'
import Image from 'next/image'

const PageFooter = () => {
  return (
    <div className='flex flex-col py-56 mx-auto items-center justify-center w-[90%] max-w-[1040px]'>
      <Image
        src="/smilingFace.png"
        alt='smiling face'
        className='shrink-0 w-20'
        width={50}
        height={50}
        unoptimized
      />
      <span className={classNames(`text-2xl mt-6`, BreeSerifFont.className)}>
        {
          `Thank you very much for visiting my personal website! I'm passionate about making new friends and am more than happy to communicate about various industry topics or emerging technologies. Feel free to reach out to me with any questions you may have or if you'd like to discuss anything in any direction. Thank you for your interest!`
        }
      </span>
    </div>
  )
}

export default PageFooter
