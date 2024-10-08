import Link from "next/link"
import style from "../app/app.module.css"

const HomePage = () => {
  return (
    <div className={style.container}>
      <ul>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="contact">Contact</Link></li>
        <li><Link href="service">Services</Link></li>
      </ul>
    </div>
  )
}

export default HomePage
