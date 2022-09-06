import React, { useState } from 'react';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type, link) {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
}

function FooterNav(props) {
  const { footerNavList } = props;
  const [openKeys, setOpenKeys] = useState([]);
  const rootSubmenuKeys = Object.keys(footerNavList);
  const items = [
    getItem(rootSubmenuKeys[0], rootSubmenuKeys[0], null, footerNavList[rootSubmenuKeys[0]].map((i,index) => {
      return getItem(i.text, index,null,null,null,i.link)
    })),
    getItem(rootSubmenuKeys[1], rootSubmenuKeys[1], null, footerNavList[rootSubmenuKeys[1]].map((i,index) => {
      return getItem(i.text, index+10,null,null,null,i.link)
    })),
    getItem(rootSubmenuKeys[2], rootSubmenuKeys[2], null, footerNavList[rootSubmenuKeys[2]].map((i,index) => {
      return getItem(i.text, index+20,null,null,null,i.link)
    })),
    getItem(rootSubmenuKeys[3], rootSubmenuKeys[3], null, footerNavList[rootSubmenuKeys[3]].map((i,index) => {
      return getItem(i.text, index+30,null,null,null,i.link)
    })),
  ];
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: '100%',
        backgroundColor: '#f7f7f7',
      }}
      items={items}
    />
  );
}

export default FooterNav;