import React from 'react';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import PullToRefresh from 'src/pages/PullToRefresh';

import LayoutExample from 'components/Layout/layout.example';
import {Layout, Content, Aside, Footer, Header} from 'components/Layout/layout';
import './index.scss';
import logoImg from 'src/assets/logo.png';
import IconDemo from 'src/pages/Icon/icon.demo';

export default () => {

  return (
    <Router>
      <Layout className="lu">
        <Header className="lu-header">
          <div className="lu-header-logo">
            <img src={logoImg} alt=""/>
          </div>
          <h1>组件</h1>
        </Header>
        <Layout>
          <Aside className="lu-aside">
            <h2>组件</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/topics">Topics</NavLink>
              </li>
              <li>
                <NavLink to="/icon">Icon</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className="lu-content">
            <Switch>
              <Route path="/topics">
                <PullToRefresh/>
              </Route>
              <Route path="/demo">
                <LayoutExample/>
              </Route>
              <Route path="/icon">
                <IconDemo/>
              </Route>

            </Switch>
          </Content>
        </Layout>

        <Footer className="lu-footer">
          @adekang
        </Footer>
      </Layout>
    </Router>
  );
}