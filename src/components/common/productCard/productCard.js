import React from 'react'
import { Card } from 'antd';
import styles from './productCart.module.css'

const { Meta } = Card;
function ProductCard(props) {
  const { cardObject = {}} = props;
  const {title,productList,more} = cardObject
  const isOdd = productList.length % 2 ===1
  const sliceNumber = isOdd ? 5 : 4
  return (
    <section>
      <header className={styles["product-card-header"]}>
        <p>{title}</p>
      </header>
      {
        productList && productList.slice(0,sliceNumber).map((item,index) => {
          if(isOdd){
            return (
              <span key={item.title+index} style={{ width: `${index === 0 ? '100%' : '50%'}`, display:'inline-block' }} >
                <Card
                  hoverable
                  style={{ width: '100%'}}
                  cover={<img alt={item.title} src={item.cover_images.retina_small}
                  />}
                >
                  <Meta style={{ color: 'red', display: 'flex', justifyContent: 'center' }} title={item.title} description={item.currency_symbol + item.price} />
                </Card>
              </span>
            )
          }
          return (
            <span key={item.title+index} style={{ width: '50%', display:'inline-block'}}>
              <Card
                hoverable
                style={{ width: '100%'}}
                cover={<img alt={item.title} src={item.cover_images.retina_small}
                />}
              >
                <Meta style={{ color: 'red', display: 'flex', justifyContent: 'center' }} title={item.title} description={item.currency_symbol + item.price} />
              </Card>
            </span>
          )
        })
      }
      <a href={more.url} className={styles["more"]}>{more.text}</a>
    </section>
  )
}

export default ProductCard