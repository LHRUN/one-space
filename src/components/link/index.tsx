import { FC } from "react"
import styles from "./index.module.css"

interface IProps {
  href: string
}

const Link: FC<IProps> = ({ href }) => {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
    >
      {href}
    </a>
  )
}

export default Link
