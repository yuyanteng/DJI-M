import React from 'react'
import styles from './footer.module.css'
import { DatePicker } from 'antd';
export default function Footer(props) {
  const {footerList} = props
  const{navigation=[],copyright=''} = footerList
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    return dateString;
  };
  console.log(onChange,'onChange')
  return (
    <div className={styles['footer']}>
      <ul className={styles['footer-list']}>
        {
          navigation.map(i => {
            return (
              <li key={i.text} className={styles['footer-list-item']}>
                <a href={i.url}>
                  {i.text}
                </a>
              </li>)
          })
        }
      </ul>
      <p className={styles['footer-desc']} >{copyright}</p>
      <DatePicker format="YYYY-MM-DD" onChange={onChange} />
    </div>
  )
}
