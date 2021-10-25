import React from 'react';
import {HashRouter as Router, Route, NavLink, Switch,} from 'react-router-dom';
import {Layout, Content, Aside, Footer, Header} from 'components/Layout/layout';
import './index.scss';
import logoImg from 'src/assets/logo.png';
import IconDemo from 'components/Icon/icon.demo';
import ButtonDemo from 'components/Button/ButtonDemo';
import InputDemo from 'components/Input/InputDemo';
import MenuDemo from 'components/Menu/MenuDemo';
import LayoutDemo from 'components/Layout/LayoutDemo';

import Doc from 'src/pages/Doc';


const routes = [
  {
    path: '/icon',
    component: IconDemo
  },
  {
    path: '/menu',
    component: MenuDemo
  },
  {
    path: '/input',
    component: InputDemo
  },
  {
    path: '/layout',
    component: LayoutDemo,
  },
  {
    path: '/button',
    component: ButtonDemo,
  },
  {
    path: '/',
    component: Doc
  }
];


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
                <NavLink exact to="/">首页</NavLink>
              </li>
              <li>
                <NavLink exact to="/layout">Layout</NavLink>
              </li>
              <li>
                <NavLink exact to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink exact to="/button">Button</NavLink>
              </li>
              <li>
                <NavLink exact to="/input">Input</NavLink>
              </li>
              <li>
                <NavLink exact to="/menu">Menu</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className="lu-content">
            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  children={<route.component/>}
                />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}