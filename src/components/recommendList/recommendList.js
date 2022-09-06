import React, { Component } from 'react'

import styles from './recommendList.module.css';
export default class recommendLIst extends Component {
  render() {
    const { list } = this.props
    return (
      <div className={styles['recommendList']}>
        <ul className={styles['recommendLIst-items']}>
          {list.map(item => <li key={item.id}  className={styles['recommendLIst-item']}>
              <a href={item.url}>
                <h3 className={styles['recommendLIst-title']}>{item.title}</h3>
                <p className={styles['recommendLIst-description']}>{item.description}</p>
                <img src={item.image} alt="" className={styles['recommendLIst-img']}/>
              </a>
            </li>)
          }
        </ul>
      </div>
    )
  }
}
