import styles from "../about/about.module.css"
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About</h1>
      <ul>
        <li><Link href="/">Go back to home</Link></li>
        <li><Link href="contact">Go to Contact</Link></li>
        <li><Link href="service">Go to Services</Link></li>
      </ul>
    </div>
  )
}

export default AboutPage
