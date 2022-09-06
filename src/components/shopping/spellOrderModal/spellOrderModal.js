import React from 'react'
import { Button, Modal, Tabs, Tag } from 'antd';
import { useState } from 'react';

export default function spellOrderModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { TabPane } = Tabs;
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} size='large'>
          我在想想
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
            size='large'
          >
            发起拼单
          </Button>,
        ]}
      >
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Tab 1" key="1">
          <span className={styles["tab-title"]}>自取门店</span>
          <div class="tab-content">
            <div class="tab-sale-room">
              <div class="tab-sale-room-title">
                深圳天空之城店
              </div>
              <Tag>休息中</Tag>
              <div className={styles["room-distance"]}>
                距离888米
              </div>
              <div className={styles["room-place"]}>
                深圳天空之城
              </div>
              <div className={styles["room-time"]}>
                营业时间：10：00-22：00
              </div>
            </div>
          </div>
          <Button type="text">
            切换门店{'>'}
          </Button>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <span className={styles["tab-title"]}>
            配送地址
          </span>
          <span className={styles["tab-address"]}>
            没有地址呢
          </span>
          <Button type="text">
            切换地址{'>'}
          </Button>
        </TabPane>
      </Tabs>
      </Modal>
    </>
  );
};
