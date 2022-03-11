import { BackTop, Button, Col, Layout, Row } from 'antd';
import React from 'react';
import ProductItem from 'src/components/product-item/productItem';

const Home = () => {
  return <Layout>
    <Row align='middle' justify='space-around' gutter={[{ xs: 8, sm: 16, lg: 24 }, { xs: 8, sm: 16, lg: 24 }]}>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={1} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={2} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={3} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={4} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={5} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={6} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={7} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={8} />
      </Col>
      <Col xs={20} sm={12} xl={8}>
        <ProductItem key={9} />
      </Col>
    </Row>
  </Layout>;
};

export default Home;
