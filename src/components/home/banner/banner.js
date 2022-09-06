

import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import { Carousel } from 'antd';


import home from '../../../mock/home'
import styles from './banner.module.css'

function Banner() {
  const [bannerList] = useState(home.children[0].carousel_list);
  return (
    <Carousel autoplay>
    {
      bannerList.map(item => {
        const {id,image,text} = item
        return (
          <div className={styles['content']} key={id}>
            <Link to={item.link}>
              <img className={styles['carousel']} src={image.src} alt={image.alt}/>
              <div>
                <h2 className={styles['carousel-title']} style={{ color: text[0].font_color}}>{text[0].text_content}</h2>
                <p className={styles['carousel-desc']} style={{ color: text[1].font_color}}>{text[1].text_content}</p>
              </div>
            </Link>
          </div>
        )
      })
    }
    </Carousel>
  )
}

export default Banner