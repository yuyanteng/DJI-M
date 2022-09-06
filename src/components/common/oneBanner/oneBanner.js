import React from 'react'

import styles from './oneBanner.module.css'

export default function OneBanner(props) {
  const {bannerInfo} = props
  const info = bannerInfo[0].children[0]
  return (
    <div  className={styles['banner']}>
      <a href={info.link}>
        <div className={styles['banner-image']}>
          <img src={info.image.src} className={styles['banner-img']} alt='' ></img>
        </div>
        <div className={styles['banner-test']}>
          <h4 className={styles['banner-test-title']} style={{color:`${info.text[0].font_color}`}}>{info.text[0].text_content}</h4>
          <p className={styles['banner-test-desc']} style={{color:`${info.text[1].font_color}`}}>{info.text[1].text_content}</p>
        </div>
      </a>
    </div>
  )
}
