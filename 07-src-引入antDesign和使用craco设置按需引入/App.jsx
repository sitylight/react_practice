import React, { Component } from 'react';
import { Button, Layout, Menu, Icon } from 'antd';
import './App.less';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header style={{backgroundColor: '#4093ec'}}>
              <Button type='danger' size='small'>测试</Button>
              <Icon></Icon>
          </Header>
          <Layout hasSider>
            <Sider
              theme="light"
              style={{ minHeight: '90vh' }}
              collapsible="true"
            >
              <Menu>
                <Menu.Item title='item1'>item1</Menu.Item>
                <Menu.Item title='item2'>item2</Menu.Item>
                <SubMenu title="dashboard"></SubMenu>
                <SubMenu title="member"></SubMenu>
                <SubMenu title="system"></SubMenu>
              </Menu>
            </Sider>
            <Content>
              <div>
                <ul>
                  <li>1111</li>
                  <li>1111</li>
                  <li>1111</li>
                </ul>
              </div>
            </Content>
          </Layout>
              <Footer>footer</Footer>
        </Layout>
      </>
    );
  }
}
