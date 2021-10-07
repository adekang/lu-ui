import React from 'react';
import Layout from 'components/Layout/layout';
import Header from 'components/Layout/header';
import Footer from 'components/Layout/footer';
import Content from 'components/Layout/content';

export default () => {

  return <div>
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  </div>;

}