import React from 'react';
import Layout from 'components/Layout/layout';
import Header from 'components/Layout/header';
import Footer from 'components/Layout/footer';
import Content from 'components/Layout/content';
import Aside from 'components/Layout/aside';
import './layout.exmaple.scss';

export default () => {

  return (
    <>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Layout>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Layout>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
          <Aside className="z outAside">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}