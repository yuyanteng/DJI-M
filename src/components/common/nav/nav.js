import React from 'react'
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import djiLogo from '../../../assets/djiLogo.svg';

import styles from './nav.module.css'

export default function Nav() {
  // const {bannerInfo} = props
  return (
    <div  className={styles['nav']}>
      <div className={styles['nav-left']}>
        <div className={styles['nav-left-icon']}>
          <div className={styles['nav-left-line']} />
          <div className={styles['nav-left-line']} />
          <div className={styles['nav-left-line']} />
        </div>
        <img className={styles['nav-left-img']} src={djiLogo} alt='Dji' />
      </div>
      <div className={styles['nav-right']}>
        <ShoppingCartOutlined />
        <SearchOutlined />
        <UserOutlined />
      </div>
    </div>
  )
}
