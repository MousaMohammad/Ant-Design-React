import './App.css';
import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/common/Header.js';
import AppHome from './views/home.js';


const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
