import './App.css';
import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/common/Header.js';
import AppHome from './views/home.js';
import AppFooter from './components/common/footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>    
    </Layout>
  );
}

export default App;
