import React,{Component} from 'react';

import Nav from '../../components/common/nav/nav'
import Banner from '../../components/home/banner/banner'
import ProductCard from '../../components/common/productCard/productCard'
import OneBanner from '../../components/common/oneBanner/oneBanner'
import FooterNav from '../../components/common/footerNav/footerNav'
import Footer from '../../components/footer/footer'
import styles from './home.module.css'

import home from '../../mock/home'
import variants from '../../mock/variants'

const cameraDrones = home.children.filter(item => item.slug === 'mobile-products-camera-drones-mini-3-pro')
const handheld = home.children.filter(item => item.slug === 'mobile-products-handheld-dji-rs-3')
const education = home.children.filter(item => item.slug === 'mobile-products-education-and-industry')
const service = home.children.filter(item => item.slug === 'mobile-products-service-rs3')

const bannerRecycle = home.children.filter(item => item.slug === 'mobile-medium-banner-recycle-block')
const bannerDjiCredit = home.children.filter(item => item.slug === 'mobile-medium-banner-dji-credit-block')
const bannerDjiCare = home.children.filter(item => item.slug === 'mobile-medium-banner-dji-care-fresh-block')

const navigation = home.children.filter(item => item.slug === 'mobile-navigation-block')
const navigationMain = navigation[0].children[0].children.filter(item => item.pid === '')
const navigationPart = navigation[0].children[0].children.filter(item => item.pid !== '')

// 获取底部拓展数据
const navigationFn = (Main,Part) => {
  const navigationObj = {}
  Main.forEach(main => {
    const value = Part.filter(part => part.pid === main.id)
    navigationObj[main.text] = value
  })
  return navigationObj;
}

const footer = home.children.filter(item => item.slug === 'mobile-normal-footer')
// 获取首页卡片数据
const cardInfo = (productType) => {
  const productTypeCard = productType[0]
    const arr = []
    productType[0].children.forEach(id => {
      const variantsArr = Object.values(variants.idMapVariant)
      const variantsFilter= variantsArr.filter(variant => variant.id === id)
      arr.push(...variantsFilter)
    })
  productTypeCard['productList'] = arr
  return productTypeCard;
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <Nav></Nav>
          <Banner></Banner>
        </header>
        <div className={styles["home-container"]}>
          <ProductCard cardObject={cardInfo(cameraDrones)} />
          <OneBanner bannerInfo={bannerRecycle} />
          <ProductCard cardObject={cardInfo(handheld)} />
          <OneBanner bannerInfo={bannerDjiCredit} />
          <ProductCard cardObject={cardInfo(education)} />
          <OneBanner bannerInfo={bannerDjiCare} />
          <ProductCard cardObject={cardInfo(service)} />
        </div>
        <div className={styles["home-footer"]}>
          <FooterNav footerNavList={navigationFn(navigationMain,navigationPart)}></FooterNav>
        </div>
        <Footer footerList= {footer[0]}></Footer>
    </div>
    )
  }
}
export default Home